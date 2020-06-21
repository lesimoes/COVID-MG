// eslint-disable-next-line import/no-extraneous-dependencies
const uuid = require('uuid/v1')
const BaseService = require('./BaseService');

class DailyService extends BaseService {
  constructor ({ repository }) {
    super({ repository });
  }

  async create (item) {
    const splitedRow = item.field1.split(';');
    const row = {
      id: uuid(),
      contador: Number(splitedRow[2]),
      dataNotificacao: splitedRow[3],
      classifacao: splitedRow[4],
      genero: splitedRow[5],
      idade: Number(splitedRow[6]),
      faixaEtaria: splitedRow[7],
      municipioCod: Number(splitedRow[8]),
      municipio: splitedRow[9],
      comorbidade: splitedRow[10],
      evolucao: splitedRow[11],
      internacao: splitedRow[12],
      uti: splitedRow[13],
      dataAtualizacao: splitedRow[14],
      dataUpload: new Date().toISOString().split('T')[0],
    }
    super.create(row);
  }
}
module.exports = DailyService;
