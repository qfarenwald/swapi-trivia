import React, { Component } from 'react';
import './App.css';
import Form from '../Form/Form';
import MoviesContainer from '../MoviesContainer/MoviesContainer';
import { getMovies, getCharacters } from '../../apiCalls/apiCalls';

class App extends Component {
  constructor() {
    super();
    this.state = {
      user: null,
      movies: [],
      currentMovie: {},
      currentCharacters: [],
      favoriteCharacters: []
    }
  }

componentDidMount = () => {
  getMovies()
    .then(films => this.setState({movies: films}))
    .catch(error => console.error('error'))

  getCharacters()
}

  updateUserState = (userObj) => {
    this.setState({
      user: userObj
    })
  }

  render() {
    return(
      <section className='App'>
        <h1><span className='yellow-text'>SW</span>API</h1>
        {this.state.user ? <MoviesContainer movies={this.state.movies}/> : <Form updateUserState={this.updateUserState}/>}
      </section>
    )
  }

}

export default App;
