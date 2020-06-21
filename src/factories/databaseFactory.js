const Dynamo = require('../libs/Dynamo');
const { DataBaseService } = require('../enums/EAws')
const DailyRepository = require('../repositories/dailyRepository');
const DailyService = require('../services/dailyService');
// FIXME REFACTOR
const createDynamoService = async () => {
  const host = process.env.LOCALSTACK_HOST || 'localhost';
  const port = process.env.S3_PORT || '4576';
  const region = process.env.REGION || 'us-east-1';

  new Dynamo(host, port, region).getInstance();
  const dailyRepository = new DailyRepository();
  const dailyService = new DailyService({
    repository: dailyRepository,
  });

  return dailyService;
};

// eslint-disable-next-line consistent-return
const databaseFactory = async (service) => {
  if (service === DataBaseService.DYNAMO) {
    return createDynamoService();
  }
};

module.exports = databaseFactory;
