class SQSListener {



  async main(event) {
    console.log('****** event', event)
    const [{ body, messageId }] = event.Records
    const item = JSON.parse(body)

    console.log('******** Message', 
      JSON.stringify({
        ...item,
        messageId,
        at: new Date().toISOString()
      }, null, 2)
    )
    try {
      return {
        statusCode: 200,
        body: 'SQS Listener ok'
      }
    } catch (error) {
      return {
        statusCode: 500,
        body: 'Deu ruim!'
      }
    }
  }

}

module.exports = SQSListener;