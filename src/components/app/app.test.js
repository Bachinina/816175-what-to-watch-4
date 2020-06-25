import React from "react";
import renderer from "react-test-renderer";
import App from "./app.jsx";

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

const movie = {
  title: `The Grand Budapest Hotel`,
  genre: `drama`,
  year: 2014
};

it(`Render App`, () => {
  const tree = renderer.create(
      <App
        title={movie.title}
        genre={movie.genre}
        year={movie.year}
        movies={movies}
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
