import React from "react";
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import MovieCard from "./movie-card.jsx";

configure({adapter: new Adapter()});

const movie = {
  src: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
  title: `Fantastic Beasts: The Crimes of Grindelwald`
};


it(`Mouse-over on movie card should pass to the callback data-object from which this answer was created`, () => {
  const onMovieCardMouseOver = jest.fn();

  const screen = shallow(
      <MovieCard
        movie={movie}
        onMovieCardMouseOver={onMovieCardMouseOver}
      />
  );

  screen.simulate(`mouseOver`, {});

  expect(onMovieCardMouseOver).toHaveBeenCalledTimes(1);
  expect(onMovieCardMouseOver.mock.calls[0][0]).toMatchObject(movie);
});
