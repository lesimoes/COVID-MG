const BucketService = Object.freeze({
  S3: 'S3',
  NONE: 'none',
})

const SQSService = Object.freeze({
  SQS: 'SQS',
  NONE: 'none',
})

const DataBaseService = Object.freeze({
  DYNAMO: 'Dynamo',
  NONE: 'None',
})

module.exports = {
  BucketService,
  SQSService,
  DataBaseService,
}
