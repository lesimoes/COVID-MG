// eslint-disable-next-line import/no-extraneous-dependencies
const dynamoose = require('dynamoose');

class Dynamo {
  constructor (host, port, region) {
    this.host = host;
    this.port = port;
    this.region = region;
  }

  getInstance () {
    const dynamoSettings = new dynamoose.aws.sdk.DynamoDB(
      {
        region: this.region,
      }
    )

    dynamoose.aws.ddb.set(dynamoSettings);
  }
}

module.exports = Dynamo;
