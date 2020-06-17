const queueFactory = require('../factories/queueFactory');
const bucketFactory = require('../factories/bucketFactory');
const { Writable } = require('stream')
const csvtojson = require('csvtojson')

class S3Listener {
  constructor (settings) {
    this.settings = settings;
  }

  processDataOnDemand (sqsService) {
    const writableStream = new Writable({
      write: (chunk, encoding, done) => {
        const line = chunk.toString();
        // console.log('sending..', line, 'at', new Date().toISOString())
        sqsService.sendMessageCallback(line, done)
      }
    });
    return writableStream;
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
    console.log('processing.', name, key)
    // const key = 'covid19.csv';
    try {
      // FIXME REFACTOR
      const resultS3 = await bucketFactory('S3').getObject(key)
      const queueService = await queueFactory('SQS');

      resultS3.createReadStream()
        .pipe(csvtojson())
        .pipe(this.processDataOnDemand(queueService))
        
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