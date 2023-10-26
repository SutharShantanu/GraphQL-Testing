const { ApolloServer } = require('apollo-server');
const fs = require('fs');
const path = require('path');

// Load the schema and resolvers
const schemaPath = path.join(__dirname, 'src', 'schema', 'schema.graphql');
const typeDefs = fs.readFileSync(schemaPath, 'utf8');
const resolvers = require('./src/resolvers/resolvers');

// Create and start the Apollo Server
const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(`Server is running at ${url}`);
});
