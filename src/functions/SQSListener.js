const databaseFactory = require('../factories/databaseFactory');

class SQSListener {
  async main (event) {
    // console.log('****** event', event)
    const [{ body, messageId }] = event.Records
    const item = JSON.parse(body)

    try {
      // console.log('******** Message', item)

      const dynamoFactory = await databaseFactory('Dynamo');
      dynamoFactory.create(item);
      return {
        statusCode: 200,
        body: 'SQS Listener ok',
      }
    } catch (error) {
      console.log(error)
      return {
        statusCode: 500,
        body: 'Deu ruim!',
      }
    }
  }
}

module.exports = SQSListener;
