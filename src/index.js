const settings = require('../config/settings');
const Scheduler = require('./functions/Scheduler');

const scheduler = new Scheduler(settings);

module.exports = {
  scheduler: scheduler.main.bind(scheduler),
}