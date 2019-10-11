import React, { Component } from 'react';
import './App.css';
import Form from '../Form/Form';
import MoviesContainer from '../MoviesContainer/MoviesContainer';
import { getMovies } from '../../apiCalls/apiCalls';
import  { Route, Link } from 'react-router-dom';
import CharactersContainer from '../CharactersContainer/CharactersContainer';

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
   getMovies('https://swapi.co/api/films/')
     .then(films => this.setState({movies: films}))
     .catch(error => console.error('error'))
  }

  updateUserState = (userObj) => {
    this.setState({ user: userObj })
  }

  updateCurrentCharacters = (characters) => {
    this.setState({ currentCharacters : characters})
  }

  render() {
    return(
      <section className='App'>
        <h1><span className='yellow-text'>SW</span>API</h1>
        <Route exact path='/' render={() => <Form updateUserState={this.updateUserState}/>}/>
        <Route exact path='/movies' render={() => <MoviesContainer movies={this.state.movies} updateCurrentCharacters={this.updateCurrentCharacters}/>}/>
        <Route exact path='/movies/characters' render={() => <CharactersContainer characters={this.state.currentCharacters}/>}/>
      </section>
    )
  }

}

export default App;
