import { combineResolvers } from 'graphql-resolvers';
import { UserInputError } from 'apollo-server-express';
import { createToken, isAuthenticated } from './helpers';

const users = [];

const resolvers = {
  Mutation: {
    createUser: (parent, { username, password }) => {
      if (!username || !password) {
        throw new UserInputError(
          'username or password is not provided',
        );
      }
      const user = {
        name: username,
        id: users.length,
      };
      users.push({
        name: username,
        id: users.length,
        password,
      });

      return { token: createToken(user, 'Secret', '30m'), user: { id: user.id, name: user.name } };
    },
    login: combineResolvers(
      isAuthenticated,
      async (parent, { username, password }, { token }) => {
        const user = users.find(u => u.name === username && u.password === password);
        return { token, user: { id: user.id, name: user.name } };
      },
    ),
  },
};

export default resolvers;
