import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import { formatError } from 'apollo-errors';
import jwt from 'jsonwebtoken';
import bodyParser from 'body-parser';
import 'dotenv/config';

import typeDefs from './src/schema';
import resolvers from './src/resolvers';
import directives from './src/directives';



const app = express();

const server = new ApolloServer({
  typeDefs,
  resolvers,
  schemaDirectives: directives,
  context: ({ req }) => {
    let user = {};
    let token = '';
    if (req.headers.authorization) {
      const splitToken = (req.headers.authorization || '').split(' ')[1];
      if (splitToken) {
        token = splitToken;
        try {
          user = jwt.verify(splitToken, 'Secret');
        } catch (e) {
          console.log('user verify error');
          console.log(e);
        }
      }
    }
    return {
      token,
      user,
    };
  },
  formatError,
  introspection: true,
  playground: true,
});

server.applyMiddleware({
  app,
  path: '/graphql',
  cors: {
    origin: '*',
    credentials: true,
    methods: ['GET', 'PUT', 'POST', 'DELETE', 'PATCH', 'OPTIONS'],
    allowedHeaders: [
      'Origin',
      'Content-Type',
      'Accept',
      'Authorization',
    ],
  },
});

app.listen({ port: 8000 }, () => {
  console.log('Apollo Server on http://localhost:8000/graphql');
});
