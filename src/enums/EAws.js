const BucketService = Object.freeze({
  S3: 'S3',
  NONE: 'none'
})

const SQSService = Object.freeze({
  SQS: 'SQS',
  NONE: 'none',
})

module.exports = {
  BucketService,
  SQSService
}