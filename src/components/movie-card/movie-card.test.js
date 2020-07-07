import React from "react";
import renderer from "react-test-renderer";
import MovieCard from "./movie-card.jsx";

const movie = {
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
};


it(`Should render MovieCard`, () => {
  const tree = renderer.create(
      <MovieCard
        movie={movie}
        onMovieCardMouseOver={() => {}}
        onMovieCardClick={() => {}}
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
