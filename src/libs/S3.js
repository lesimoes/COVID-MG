const AWS = require('aws-sdk');

class S3 {
  
  constructor(host, port, region, bucketName) {
    this.host = host;
    this.port = port;
    this.region = region;
    this.bucketName = bucketName;
  }

  getConfig() {
    const s3config = {
      s3ForcePathStyle: true,
      signatureVersion: 'v2',
      region: this.region
    }
    console.log('REGION', this.region)
    return new AWS.S3(s3config);
  }

  async uploadFile (file, key) {
    return this.getConfig()
    .upload({
      Body: file,
      Bucket: this.bucketName,
      Key: key
    })
    .promise();
  }


}

module.exports = S3