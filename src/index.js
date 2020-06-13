const settings = require('../config/settings');
const ReadFile = require('./functions/ReadFile');

const readFile = new ReadFile(settings);

module.exports = {
  readFile: readFile.main.bind(readFile),
}