import Chance from 'chance';

import { randomMovies, randomActors } from './helpers';

const random = new Chance();

const resolvers = {
  Movie: {
    actors() {
      return random.pickset(randomActors, random.integer({ min: 1, max: randomActors.length }));
    },
  },
  Query: {
    movies: () => randomMovies,
    movie: (root, { title }) => randomMovies.find(movie => movie.title.toLowerCase() === title.toLowerCase()),
  },
};

export default resolvers;
