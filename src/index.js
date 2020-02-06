const ENV_VARS = require('./env_vars.js')
const { prisma } = require('../generated/prisma-client')
const { GraphQLServer } = require('graphql-yoga')
const Query = require('../src/resolvers/Query')
const Mutation = require('../src/resolvers/Mutation')


const resolvers = {
  Query,
  Mutation,
}


// In order to access the request object in utils
/*
To enable data to be sent to and returned from the context object,
it is created as a function literal that returns it's argument,
plus other things, like the auto-generated prisma client, 
This allows currying. So When the HTTP request carrying the incoming 
GraphQL query (or mutation) to the context as well.
This will allow your resolvers to read the Authorization header 
and validate if the user who submitted the request is eligible to perform the requested operation.
*/



const server = new GraphQLServer({
    typeDefs: './schema.graphql',
    resolvers,
    context: {
      prisma,
    },
})

console.log(process.env.UTILS_APP_SECRET)
server.start(() => console.log('Server is running on http://localhost:4000'))
