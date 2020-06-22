const typeDefinition = `
type Daily {
  id: String
  contador: Int
  dataNotificacao: String
  classifacao: String
  genero: String
  idade: Int
  faixaEtaria: String
  municipioCod: Int
  municipio: String
  comorbidade: String
  evolucao: String
  internacao: String
  uti: String
  dataAtualizacao: String
  dataUpload: String
}

type Query {
  getDaily(
    id: String
    contador: Int
    dataNotificacao: String
    classifacao: String
    genero: String
    idade: Int
    faixaEtaria: String
    municipioCod: Int
    municipio: String
    comorbidade: String
    evolucao: String
    internacao: String
    uti: String
    dataAtualizacao: String
    dataUpload: String
  ): [Daily]
}

type Mutation {
  createDaily(
    id: String!
  ): String
}

`;
module.exports = typeDefinition;
