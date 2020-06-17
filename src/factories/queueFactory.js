const SQS = require('../../src/libs/SQS');
const { SQSService } = require('../enums/EAws')
const settings = require('../../config/settings');

const createSQSService = () => {
  
  const host = process.env.LOCALSTACK_HOST || "localhost";
  const port = process.env.S3_PORT || "4576";
  const queueName = settings.SQS_QUEUE;
  const region = process.env.REGION || "us-east-1";
  
  return new SQS(host, port, region, queueName);
  
}

const queueFactory = (service) => {
  if (service === SQSService.SQS) {
    return createSQSService();
  }
}

module.exports = queueFactory