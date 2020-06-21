const S3 = require('../libs/S3');
const { BucketService } = require('../enums/EAws')
const settings = require('../../config/settings');

const createS3Service = () => {
  const host = process.env.LOCALSTACK_HOST || 'localhost';
  const port = process.env.S3_PORT || '4572';
  const bucketName = settings.BUCKET_NAME;
  const region = process.env.REGION || 'us-east-1';

  return new S3(host, port, region, bucketName);
}

// eslint-disable-next-line consistent-return
const bucketFactory = (service) => {
  if (service === BucketService.S3) {
    return createS3Service();
  }
}

module.exports = bucketFactory
