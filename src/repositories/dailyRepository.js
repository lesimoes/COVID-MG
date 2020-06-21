const BaseRepository = require('./baseRepository');
const schema = require('./schemas/dailySchema');

class DailyRepository extends BaseRepository {
  constructor () {
    super({
      schema,
    })
  }
}

module.exports = DailyRepository;
