import {formatMovieName, getRandomColor, getRandomInteger} from "../utils.js";

const MIN_RATING = 0;
const MAX_RATING = 10;

const moviesNames = [`Bohemian Rhapsody`, `Macbeth`, `Aviator`, `We need to talk about Kevin`, `What We Do in the Shadows`, `Midnight Special`, `War of the Worlds`];


const generateMovies = () => {
  return moviesNames.map((name, i) => {
    return {
      "id": i + 1,
      name,
      "posterImage": `img/${formatMovieName(name)}-poster.jpg`,
      "previewImage": `img/${formatMovieName(name)}.jpg`,
      "bgImage": `img/${formatMovieName(name)}-bg.jpg`,
      "bgColor": `${getRandomColor()}`,
      "videoLink": `https://some-link`,
      "previewVideoLink": `https://some-link`,
      "description": `In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave's friend and protege.`,
      "rating": getRandomInteger(MIN_RATING, MAX_RATING, false),
      "scoresCount": getRandomInteger(0, 1000),
      "director": `Wes Andreson`,
      "starring": [`Bill Murray`, `Edward Norton`, `Jude Law`, `Willem Dafoe`, `Saoirse Ronan`],
      "runTime": getRandomInteger(0, 200),
      "genre": `Comedy`,
      "released": getRandomInteger(1950, 2020),
      "isFavorite": Math.random() > 0.5,
    };
  });
};

const movies = generateMovies();
export default movies;

