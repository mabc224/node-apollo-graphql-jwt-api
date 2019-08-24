import Chance from 'chance';
import { skip } from 'graphql-resolvers';
import { ForbiddenError } from 'apollo-server-express';
import jwt from 'jsonwebtoken';

const random = new Chance();

// persistent until server is running
const generateActor = () => ({
  name: random.name(),
  birthday: random.birthday({ string: true }),
  country: random.country({ full: true }),
});


const generateArrayCount = (max = 10) => random.integer({ min: 1, max });

const generateMovie = () => ({
  title: random.unique(random.word, generateArrayCount(5)).join(' '),
  year: random.year(),
  rating: random.floating({ min: 1, max: 10, fixed: 1 }),
  scoutbase_rating: random.floating({ min: 1, max: 10, fixed: 1 }),
});

const randomActors = random.unique(generateActor, generateArrayCount());
const randomDirectors = random.unique(generateActor, generateArrayCount());
const randomMovies = random.unique(generateMovie, generateArrayCount());

console.log('----Actors-----');
console.log(randomActors);

console.log('----Directors-----');
console.log(randomDirectors);

console.log('----Movies-----');
console.log(randomMovies);

const createToken = (user, secret, expiresIn) => jwt.sign(user, secret, {
  expiresIn,
});

const isAuthenticated = (parent, args, context) => ((Object.keys(context.user).length > 0) ? skip : new ForbiddenError('Not authenticated as user.'));

export {
  randomActors,
  randomDirectors,
  randomMovies,
  createToken,
  isAuthenticated,
};
