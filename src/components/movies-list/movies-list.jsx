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
    const {movies, onMovieCardClick} = this.props;
    return (
      <React.Fragment>
        <div className="catalog__movies-list">
          {movies.map((movie) => (
            <MovieCard
              key={movie.id}
              movie={movie}
              onMovieCardMouseOver={this._handleMovieCardMouseOver}
              onMovieCardClick={onMovieCardClick}
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
        id: PropTypes.oneOfType([
          PropTypes.string,
          PropTypes.number
        ]).isRequired,
        name: PropTypes.string.isRequired,
        posterImage: PropTypes.string.isRequired,
        previewImage: PropTypes.string.isRequired,
        bgImage: PropTypes.string.isRequired,
        bgColor: PropTypes.string.isRequired,
        videoLink: PropTypes.string.isRequired,
        previewVideoLink: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        rating: PropTypes.number.isRequired,
        scoresCount: PropTypes.number.isRequired,
        director: PropTypes.string.isRequired,
        starring: PropTypes.arrayOf(
            PropTypes.string
        ).isRequired,
        runTime: PropTypes.number.isRequired,
        genre: PropTypes.string.isRequired,
        released: PropTypes.number.isRequired,
        isFavorite: PropTypes.bool.isRequired,
      })
  ).isRequired,
  onMovieCardClick: PropTypes.func.isRequired
};

export default MoviesList;
