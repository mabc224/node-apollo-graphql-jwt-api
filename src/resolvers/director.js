import { randomDirectors } from './helpers';

const resolvers = {
  Query: {
    directors: () => randomDirectors,
    director: (root, { name }) => randomDirectors.find(director => director.name.toLowerCase() === name.toLowerCase()),
  },
};

export default resolvers;
