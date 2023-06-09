
import React from "react";
import { data } from '../data'
import Navbar from "./Navbar";
import MovieCard from "./MovieCard";
import { addMovies, setShowFavourites } from '../actions';
import { movies } from "../reducers";


class App extends React.Component {
  componentDidMount() {
    const { store } = this.props;

    store.subscribe(() => {
      // console.log("updated");
      this.forceUpdate();
    });

    store.dispatch(addMovies(data));
    // console.log(store);
    // console.log(store.getState());
    this.props.store.dispatch({
      type: 'ADD_MOVIES',
      movies: data
    })
    // console.log(this.props.store.getState())
  }
  isMovieFavourite = (movie) => {
    const { movies } = this.props.store.getState();
    const index = movies.favourites.indexOf(movie);
    if (index !== -1) {
      //find the movie
      return true;
    }
    return false;
  }

  onChangeTab = (val) => {
    this.props.store.dispatch(setShowFavourites(val))
  }

  render() {
    const {movies} = this.props.store.getState()
    const { list, favourites, showFavourites } = movies;
    console.log('RENDER', this.props.store.getState());
    const displayMovies = showFavourites ? favourites : list;
    return (
      <div className="App">
        <Navbar />
        <div className="main">
          <div className="tabs">
            <div className={`${showFavourites ? '' : 'active-tabs'}`} onClick={() => this.onChangeTab(false)}>Movies</div>
            <div className={`${showFavourites ? 'active-tabs' : ''}`} onClick={() => this.onChangeTab(true)}>Favorites</div>
          </div>
          <div className="list">
            {displayMovies.map((movie, index) => (
              <MovieCard
                movie={movie}
                key={`movies-${index}`}
                dispatch={this.props.store.dispatch}
                isFavourite={this.isMovieFavourite(movie)}
              />
            ))}
          </div>
          {displayMovies.length === 0 ? <div className="no-movies">No movies to display! </div> : null}
        </div>
      </div>
    );
  }
}

export default App;
