const { ApolloServer, gql } = require('apollo-server');
const resolvers = require('./resolver');
const typeDefs = require('./schema.graphql');

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(`Server is running at ${url}`);
});
