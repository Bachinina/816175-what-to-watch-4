import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Main from "./main.jsx";

const movies = [`Fantastic Beasts`, `Bohemian Rhapsody`, `Macbeth`];
const movieData = {
  title: `The Grand Budapest Hotel`,
  genre: `drama`,
  year: 2014
};


Enzyme.configure({
  adapter: new Adapter(),
});

it(`Should title be pressed`, () => {
  const onMovieTitleClick = jest.fn();

  const main = shallow(
      <Main
        title={movieData.title}
        genre={movieData.genre}
        year={movieData.year}
        movies={movies}
        onMovieTitleClick={onMovieTitleClick}
      />
  );

  const title = main.find(`.small-movie-card__title`).at(1);
  title.simulate(`click`);

  expect(onMovieTitleClick).toHaveBeenCalledTimes(1);
});
