import { gql } from 'apollo-server-express';

const typeDefs = gql`
    directive @isAuthenticated on FIELD_DEFINITION

    type Movie {
        title: String
        year: Int
        rating: Float
        scoutbase_rating: Float @isAuthenticated
        actors: [Actor]
    }
    extend type Query {
        movies : [Movie]
        movie(title: String!): Movie
    }
`;

export default typeDefs;
