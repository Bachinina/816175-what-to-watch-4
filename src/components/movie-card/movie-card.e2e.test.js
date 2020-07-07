import React from "react";
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import MovieCard from "./movie-card.jsx";

configure({adapter: new Adapter()});

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


it(`Mouse-over on movie card should pass to the callback data-object from which this answer was created`, () => {
  const onMovieCardMouseOver = jest.fn();
  const onMovieCardClick = jest.fn();

  const screen = shallow(
      <MovieCard
        movie={movie}
        onMovieCardMouseOver={onMovieCardMouseOver}
        onMovieCardClick={onMovieCardClick}
      />
  );

  screen.simulate(`mouseOver`, {});
  screen.find(`.small-movie-card__title`).simulate(`click`);

  expect(onMovieCardClick).toHaveBeenCalledTimes(1);
  expect(onMovieCardMouseOver).toHaveBeenCalledTimes(1);
  expect(onMovieCardMouseOver.mock.calls[0][0]).toMatchObject(movie);
});
