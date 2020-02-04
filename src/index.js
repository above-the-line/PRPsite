const { prisma } = require('../generated/prisma-client')
const { GraphQLServer } = require('graphql-yoga')
const Query = require('../src/resolvers/Query')
const Mutation = require('../src/resolvers/Mutation')


const resolvers = {
  Query,
  Mutation,
  User: {
    posts(root, args, context) {
      return context.prisma
        .user({
          id: root.id,
        })
        .posts()
    },
  },
  Post: {
    author(root, args, context) {
      return context.prisma
        .post({
          id: root.id,
        })
        .author()
    },
  },
}

const server = new GraphQLServer({
    typeDefs: './schema.graphql',
    resolvers,
    context: {
      prisma,
    },
  })
  server.start(() => console.log('Server is running on http://localhost:4000'))