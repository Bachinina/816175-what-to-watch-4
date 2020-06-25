import React, {PureComponent} from "react";
import PropTypes from "prop-types";

class MovieCard extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const {movie, onMovieCardMouseOver} = this.props;

    return (
      <article
        className="small-movie-card catalog__movies-card"
        onMouseOver={() => {
          onMovieCardMouseOver(movie);
        }}
      >
        <div className="small-movie-card__image">
          <img src={movie.src} alt={movie.title} width="280" height="175" />
        </div>
        <h3 className="small-movie-card__title">
          <a className="small-movie-card__link" href="movie-page.html">{movie.title}</a>
        </h3>
      </article>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    src: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
  }).isRequired,
  onMovieCardMouseOver: PropTypes.func.isRequired
};

export default MovieCard;
