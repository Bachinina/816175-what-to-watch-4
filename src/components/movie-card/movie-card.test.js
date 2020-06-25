import React from "react";
import renderer from "react-test-renderer";
import MovieCard from "./movie-card.jsx";

const movie = {
  src: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
  title: `Fantastic Beasts: The Crimes of Grindelwald`
};

it(`Should render MovieCard`, () => {
  const tree = renderer.create(
      <MovieCard
        movie={movie}
        onMovieCardMouseOver={() => {}}
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
