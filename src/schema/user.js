import { gql } from 'apollo-server-express';

const typeDefs = gql`
    type Token {
      token: String!
      user: User
    }
    type User {
      id: ID!
      name: String!
    }    
    
    extend type Mutation {
      createUser(username: String, password: String): Token
      login(username: String, password: String): Token
    }
`;

export default typeDefs;
