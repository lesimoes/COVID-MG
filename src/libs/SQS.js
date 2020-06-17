const AWS = require('aws-sdk');

class SQS {
  constructor (host, port, region, queueName) {
    this.host = host;
    this.port = port;
    this.region = region;
    this.queueName = queueName;

  }

  getInstance () {
    const sqsConfig = {
      region: this.region,
    }
    return new AWS.SQS(sqsConfig);
  }

  async getQueueUrl () {

    const { QueueUrl } = await this.getInstance()
    .getQueueUrl({
      QueueName: this.queueName,
    }).promise();

    return QueueUrl;
  }

  async sendMessageCallback (body, callback) {
    const queueUrl = await this.getQueueUrl();
    const messageConfig = {
      QueueUrl: queueUrl,
      MessageBody: body
    }
    this.getInstance()
    .sendMessage(messageConfig, callback)
  }
}

module.exports = SQS;