import React, {PureComponent} from "react";
import PropTypes from "prop-types";

class MovieCard extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const {movie, onMovieCardMouseOver, onMovieCardClick} = this.props;
    const {name, previewImage} = movie;

    return (
      <article
        className="small-movie-card catalog__movies-card"
        onMouseOver={() => {
          onMovieCardMouseOver(movie);
        }}
      >
        <div className="small-movie-card__image"
          onClick={() => {
            onMovieCardClick(movie);
          }}
        >
          <img src={previewImage} alt={name} width="280" height="175"/>
        </div>
        <h3 className="small-movie-card__title"
          onClick={() => {
            onMovieCardClick(movie);
          }}
        >
          <a className="small-movie-card__link">{name}</a>
        </h3>
      </article>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
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
  }).isRequired,
  onMovieCardMouseOver: PropTypes.func.isRequired,
  onMovieCardClick: PropTypes.func.isRequired,
};


export default MovieCard;
