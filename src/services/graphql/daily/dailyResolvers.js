const resolvers = {
  Query: {
    async getDaily (root, args, context, info) {
      return context.Daily.findAll(args)
    },
  },
  Mutation: {
    async createDaily (root, args, context, info) {
      const { id } = await context.Daily.create(args)
      return id
    },
  },
}
module.exports = resolvers;
