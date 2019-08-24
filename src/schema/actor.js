import { gql } from 'apollo-server-express';

const typeDefs = gql`
    type Actor {
        name: String
        birthday: String
        country: String
        directors: [Director]
    }
    extend type Query {
        actors: [Actor]
        actor(name: String!): Actor
    }
`;

export default typeDefs;
