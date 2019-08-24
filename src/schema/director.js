import { gql } from 'apollo-server-express';

const typeDefs = gql`
    type Director {
        name: String
        birthday: String
        country: String
    }
    extend type Query {
        directors: [Director]
        director(name: String!): Director
    }
`;

export default typeDefs;
