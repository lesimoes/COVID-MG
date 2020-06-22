const { ApolloServer, gql } = require('apollo-server-lambda');
const schema = require('../services/graphql/index')
const databaseFactory = require('../factories/databaseFactory');

const isLocal = process.env.IS_LOCAL

console.log('SCHEMA ', schema)
const server = new ApolloServer({
  schema,
  context: async () => ({
    Daily: await databaseFactory('Dynamo'),
  }),
  introspection: isLocal,
  playground: isLocal,
  formatError (error) {
    console.error('[Global error logger]', error)
    return error
  },
  formatResponse (response) {
    console.log('[Global logger]', response)
    return response
  },
});

module.exports = server.createHandler({
  cors: {
    origin: '*',
  },
});

