import React from "react";
import renderer from "react-test-renderer";
import Main from "./main.jsx";

const movies = [`Fantastic Beasts`, `Bohemian Rhapsody`, `Macbeth`];
const movieData = {
  title: `The Grand Budapest Hotel`,
  genre: `drama`,
  year: 2014
};

it(`Should render Main`, () => {
  const tree = renderer.create(
      <Main
        title={movieData.title}
        genre={movieData.genre}
        year={movieData.year}
        movies={movies}
        onMovieTitleClick={() => {}}
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
