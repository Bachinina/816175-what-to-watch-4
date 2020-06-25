import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import MovieCard from "../movie-card/movie-card.jsx";

class MoviesList extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      currentMovie: {}
    };

    this._handleMovieCardMouseOver = this._handleMovieCardMouseOver.bind(this);
  }

  render() {
    const {movies} = this.props;
    return (
      <React.Fragment>
        <div className="catalog__movies-list">
          {movies.map((movie) => (
            <MovieCard
              key={movie.title}
              movie={movie}
              onMovieCardMouseOver={this._handleMovieCardMouseOver}
            />
          ))}
        </div>

        <div className="catalog__more">
          <button className="catalog__button" type="button">Show more</button>
        </div>
      </React.Fragment>
    );
  }

  _handleMovieCardMouseOver(currentMovie) {
    if (this.state.currentMovie !== currentMovie) {
      this.setState({
        currentMovie
      });
    }
  }
}

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(
      PropTypes.shape({
        src: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired
      })
  ).isRequired
};

export default MoviesList;
