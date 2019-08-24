import { gql } from 'apollo-server-express';

import actorTypeDef from './actor';
import directorTypeDef from './director';
import movieTypeDef from './movie';
import userTypeDef from './user';


const linkSchema = gql`
  scalar Date
  type Query {
    _: Boolean
  }
  type Mutation {
    _: Boolean
  }
  type Subscription {
    _: Boolean
  }
`;


export default [
  linkSchema,
  actorTypeDef,
  directorTypeDef,
  movieTypeDef,
  userTypeDef,
];
