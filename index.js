import { GraphQLServer } from 'graphql-yoga';
import resolvers from './graphql/resolvers';

//need to define a schema(schema: description about what r u gonna get, what r u gonna send)


//what the GraphQLServer wants us to do is 
//that which queries do we have and which mutation do we have
//so the graphql can understand
const server = new GraphQLServer({ 
    typeDefs: "graphql/schema.graphql", 
    resolvers 
});

server.start(() => console.log('Graphql Server is running on localhost:4000'));