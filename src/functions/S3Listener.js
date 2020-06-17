class S3Listener {
  constructor (settings) {
    this.settings = settings;
  }

  async main(event) {
    try {
      console.log(event)
      return {
        statusCode: 200,
        body: 'Sucesso'
      }
    } catch (error) {
      return {
        statusCode: 500,
        body: 'Ruim'
      }
    }
  }
}

module.exports = S3Listener;