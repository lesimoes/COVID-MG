const env = require('env-var');
const settings = {
  NODE_ENV: env.get('NODE_ENV').required().asString(),
  covidCSV: env.get('CSVCovidMG').required().asString(),
  BUCKET_NAME: env.get('BUCKET_NAME').required().asString(),
}
module.exports = settings;