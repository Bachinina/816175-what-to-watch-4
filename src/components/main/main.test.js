import React from "react";
import renderer from "react-test-renderer";
import Main from "./main.jsx";

const movies = [
  {
    id: 1,
    bgColor: `#ef05fe`,
    bgImage: `img/bohemian-rhapsody-bg.jpg`,
    description: `In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave's friend and protege.`,
    director: `Wes Andreson`,
    genre: `Comedy`,
    isFavorite: false,
    name: `Bohemian Rhapsody`,
    posterImage: `img/bohemian-rhapsody-poster.jpg`,
    previewImage: `img/bohemian-rhapsody.jpg`,
    previewVideoLink: `https://some-link`,
    rating: 6.8,
    released: 1976,
    runTime: 74,
    scoresCount: 90,
    starring: [`Bill Murray`, `Edward Norton`, `Jude Law`, `Willem Dafoe`, `Saoirse Ronan`],
    videoLink: `https://some-link`
  }, {
    id: 2,
    bgColor: `#f82136`,
    bgImage: `img/macbeth-bg.jpg`,
    description: `In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave's friend and protege.`,
    director: `Wes Andreson`,
    genre: `Comedy`,
    isFavorite: false,
    name: `Macbeth`,
    posterImage: `img/macbeth-poster.jpg`,
    previewImage: `img/macbeth.jpg`,
    previewVideoLink: `https://some-link`,
    rating: 2.2,
    released: 2003,
    runTime: 30,
    scoresCount: 347,
    starring: [`Bill Murray`, `Edward Norton`],
    videoLink: `https://some-link`,
  }
];

const promoMovie = movies[0];


it(`Should render Main`, () => {
  const tree = renderer.create(
      <Main
        promoMovie={promoMovie}
        movies={movies}
        onMovieCardClick={() => {}}
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
