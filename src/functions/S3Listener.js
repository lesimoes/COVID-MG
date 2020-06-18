const queueFactory = require('../factories/queueFactory');
const bucketFactory = require('../factories/bucketFactory');
const { Writable, pipeline } = require('stream')
const csvtojson = require('csvtojson')

class S3Listener {
  constructor (settings) {
    this.settings = settings;
  }

  processDataOnDemand (sqsService) {
    console.log('sdsdsadsd')
    const writableStream = new Writable({
      write: (chunk, encoding, done) => {
        const line = chunk.toString();
        console.log('sending..', line, 'at', new Date().toISOString())
        sqsService.sendMessageCallback(line, done)
      }
    });
    return writableStream;
  }

  async pipefyStreams(...args) {
    return new Promise((resolve, reject) => {
        pipeline(
            ...args,
            error => error ? reject(error) : resolve()
        )
    })
}

  async main(event) {
    const [
      {
          s3: {
              bucket: {
                  name
              },
              object: {
                  key
              }
          }
      }
  ] = event.Records
    // console.log('processing.', name, key)
    // const key = 'covid19.csv';
    try {
      // FIXME REFACTOR
      const resultS3 = await bucketFactory('S3').getObject(key)
      const queueService = await queueFactory('SQS');

      await this.pipefyStreams(
        resultS3.createReadStream(), 
        csvtojson(), 
        this.processDataOnDemand(queueService))

      return {
        statusCode: 200,
        body: 'Sucesso'
      }
    } catch (error) {
      console.log('****** Error', error)
      return {
        statusCode: 500,
        body: 'Ruim'
      }
    }
  }
}

module.exports = S3Listener;