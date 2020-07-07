import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Main from "../main/main.jsx";
import MovieDetail from "../movie-detail/movie-detail.jsx";


class App extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      isMainPageOpen: true,
      currentMovie: {},
    };

    this._handleMovieCardClick = this._handleMovieCardClick.bind(this);
  }

  render() {
    const {movies} = this.props;
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            {this._renderScreen()}
          </Route>
          <Route exact path="/dev-movie">
            <MovieDetail
              movie={movies[0]}
            />
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }

  _renderScreen() {
    if (this.state.isMainPageOpen) {
      const {promoMovie, movies} = this.props;

      return (
        <Main
          promoMovie={promoMovie}
          movies={movies}
          onMovieCardClick={this._handleMovieCardClick}
        />
      );
    } else {
      return (
        <MovieDetail
          movie={this.state.currentMovie}
        />
      );
    }
  }

  _handleMovieCardClick(currentMovie) {
    this.setState({
      isMainPageOpen: false,
      currentMovie,
    });
  }
}


App.propTypes = {
  promoMovie: PropTypes.object.isRequired,
  movies: PropTypes.arrayOf(
      PropTypes.object
  ).isRequired,
};

export default App;
