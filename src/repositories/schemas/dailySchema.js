const dynamoose = require('dynamoose');

const { Schema } = dynamoose;

const schema = new Schema({
  id: {
    type: String,
    required: true,
    hashKey: true,
  },
  contador: {
    type: Number,
    required: true,
  },
  dataNotificacao: {
    type: String,
    required: true,
  },
  classifacao: {
    type: String,
    required: true,
  },
  genero: {
    type: String,
    required: true,
  },
  idade: {
    type: Number,
    required: true,
  },
  faixaEtaria: {
    type: String,
    required: true,
  },
  municipioCod: {
    type: Number,
    required: true,
  },
  municipio: {
    type: String,
    required: true,
  },
  comorbidade: {
    type: String,
    required: true,
  },
  evolucao: {
    type: String,
    required: true,
  },
  internacao: {
    type: String,
    required: true,
  },
  uti: {
    type: String,
    required: true,
  },
  dataAtualizacao: {
    type: String,
    required: true,
  },
  dataUpload: {
    type: String,
    required: true,
  },
});

const model = dynamoose.model(
  process.env.DAILY_TABLE,
  schema
);

module.exports = model;
