import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app.jsx";
import movies from "./mocks/movies.js";

const promoMovie = movies[0];

ReactDOM.render(
    <App
      promoMovie = {promoMovie}
      movies={movies}
    />,
    document.querySelector(`#root`)
);
