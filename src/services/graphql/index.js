/* eslint-disable array-callback-return */
/* eslint-disable import/no-dynamic-require */
/* eslint-disable global-require */
const { readdirSync } = require('fs');

const {
  makeExecutableSchema,
  gql,
  mergeSchemas,
} = require('apollo-server-lambda');

const schemas = readdirSync(__dirname)
  .filter((file) => file !== 'index.js')
  .map((folder) => require(`./${folder}`))
  .map(({ schema, resolvers }) => {
    // console.log(schema)
    return makeExecutableSchema(
      {
        typeDefs: gql(schema),
        resolvers,
      }
    )
  })
module.exports = mergeSchemas({
  schemas,
})
