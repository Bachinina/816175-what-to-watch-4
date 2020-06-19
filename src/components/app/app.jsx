import React from "react";
import PropTypes from "prop-types";
import Main from "../main/main.jsx";


const App = (props) => {
  const {title, genre, year, movies} = props;

  const onMovieTitleClick = () => {};

  return (
    <Main
      title={title}
      genre={genre}
      year={year}
      movies={movies}
      onMovieTitleClick={onMovieTitleClick}
    />
  );
};

App.propTypes = {
  title: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
  movies: PropTypes.arrayOf(
      PropTypes.string.isRequired
  ),
};

export default App;
