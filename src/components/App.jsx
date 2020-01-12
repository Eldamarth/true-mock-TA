import React from 'react';
import Movies from './Movies.jsx';
import Search from './Search.jsx';
import exampleMovies from '../exampleData/exampleMovies';
import {getListOfGenres, getFilmsAscendingRating} from '../util/apiCalls';
import CONFIG from '../../config.js';

import '../styles/App.scss';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: exampleMovies.movieData,
      favorites: [{ deway: 'favorites' }],
      showFaves: false,
      errMessage:'',
      genres: []
    };

    // you might have to do something important here!
    //this.function = this.function.bind(this)
    this.swapFavorites = this.swapFavorites.bind(this);
    this.setMovieList = this.setMovieList.bind(this);
  }

  componentDidMount() {
    getListOfGenres()
      .then(genreList => genreList.genres)
      .catch( (err) =>{
        if (!genreList.genres.length){
          console.error('No list returned!');
        } else {
          this.setState({...this.state, errMessage:err})
        }
      })
      .then((list)=> {
        let genreObj = {};
        list.forEach((item) => {
          genreObj[item.name] = item.id;
        })
        this.setState({ genres: list, genreKey: genreObj} )
      })
      
  }

  swapFavorites() {
    // don't touch
    this.setState({
      showFaves: !this.state.showFaves,
    });
  }

  setMovieList(genreName) {
    let genreNum = this.state.genreKey[genreName]?this.state.genreKey[genreName]:"";
    getFilmsAscendingRating(genreNum)
    .then(filteredMovieList => {
      this.setState({
          movies: filteredMovieList
      });
    });
    
  }

  render() {
    return (
      <div className="app">
        <header className="navbar"><h1>Bad Movies</h1></header>
        <div className="main">
          <Search
            genres={this.state.genres}
            swapFavorites={this.swapFavorites}
            showFaves={this.state.showFaves}
            setMovieList={this.setMovieList}
          />
          <Movies
            movies={this.state.showFaves ? this.state.favorites : this.state.movies}
            showFaves={this.state.showFaves}
          />
        </div>
      </div>
    );
  }
}

export default App;
