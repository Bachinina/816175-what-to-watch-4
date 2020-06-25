import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app.jsx";
import movies from "./mocks/movies.js";

const movieData = {
  title: `The Grand Budapest Hotel`,
  genre: `drama`,
  year: 2014
};

ReactDOM.render(
    <App
      title={movieData.title}
      genre={movieData.genre}
      year={movieData.year}
      movies={movies}
    />,
    document.querySelector(`#root`)
);
