import Chance from 'chance';

import { randomActors, randomDirectors } from './helpers';

const random = new Chance();

const resolvers = {
  Actor: {
    directors(parent) {
      return random.pickset(randomDirectors, random.integer({ min: 1, max: randomDirectors.length }));
    },
  },
  Query: {
    actors: () => randomActors,
    actor: (root, { name }) => randomActors.find(character => character.name.toLowerCase() === name.toLowerCase()),
  },
};

export default resolvers;
