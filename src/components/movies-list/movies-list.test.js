import React from "react";
import renderer from "react-test-renderer";
import MoviesList from "./movies-list.jsx";

const movies = [
  {
    src: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
    title: `Fantastic Beasts: The Crimes of Grindelwald`
  },
  {
    src: `img/bohemian-rhapsody.jpg`,
    title: `Bohemian Rhapsody`
  },
  {
    src: `img/macbeth.jpg`,
    title: `Macbeth`
  },
  {
    src: `img/aviator.jpg`,
    title: `Aviator`
  }
];

it(`Should render MoviesList`, () => {
  const tree = renderer.create(
      <MoviesList
        movies={movies}
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
