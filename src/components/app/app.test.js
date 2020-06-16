import React from "react";
import renderer from "react-test-renderer";
import App from "./app.jsx";

const movies = [`Fantastic Beasts`, `Bohemian Rhapsody`, `Macbeth`];
const movieData = {
  title: `The Grand Budapest Hotel`,
  genre: `drama`,
  year: 2014
};

it(`Render App`, () => {
  const tree = renderer.create(
      <App
        title={movieData.title}
        genre={movieData.genre}
        year={movieData.year}
        movies={movies}
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
