import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import Main from "../main/main.jsx";


class App extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const {title, genre, year, movies} = this.props;

    return (
      <Main
        title={title}
        genre={genre}
        year={year}
        movies={movies}
      />
    );
  }
}

App.propTypes = {
  title: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
  movies: PropTypes.arrayOf(
      PropTypes.shape({
        src: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired
      })
  ).isRequired,
};

export default App;
