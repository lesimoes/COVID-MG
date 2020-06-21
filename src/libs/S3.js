// eslint-disable-next-line import/no-extraneous-dependencies
const AWS = require('aws-sdk');

class S3 {
  constructor (host, port, region, bucketName) {
    this.host = host;
    this.port = port;
    this.region = region;
    this.bucketName = bucketName;
  }

  getInstace () {
    const s3config = {
      s3ForcePathStyle: true,
      signatureVersion: 'v2',
      region: this.region,
    };
    return new AWS.S3(s3config);
  }

  async uploadFile (file, key) {
    return this.getInstace()
      .upload({
        Body: file,
        Bucket: this.bucketName,
        Key: key,
      })
      .promise();
  }

  async getObject (key) {
    const params = {
      Bucket: this.bucketName,
      Key: key,
    };
    return this.getInstace().getObject(params);
  }
}

module.exports = S3;
