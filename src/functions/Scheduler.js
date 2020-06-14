const Axios = require('axios');
const { PassThrough } = require('stream');
const { STATUS, METHOD } = require('../enums/EHttp');
const bucketFactory = require('../factories/bucketFactory');

class Scheduler {

  constructor (settings) {
    this.settings = settings;
  }

  async downloadFile () {
    const writer = new PassThrough();

    const response = await Axios({
      url: this.settings.covidCSV,
      method: METHOD.GET,
      responseType: 'stream'  
    })
    response.data.pipe(writer);

    // writer.on('data', (e) => {
    //   console.log(e.toString('utf8'))
    // })

    const uploadResponse = await bucketFactory('S3').uploadFile(writer, 'covid19.csv');
    console.log('BUCKET', uploadResponse)
  }
  async main (event) {
    
    try {
      await this.downloadFile();
      return {
        statusCode: STATUS.OK,
        body: 'Awesomeee!'
      }
    } catch (err) {
      console.log(err)
      return {
        statusCode: STATUS.INTERNAL_ERROR,
        body: 'Internal server error!'
      }
    }
    
  }
}

module.exports = Scheduler;