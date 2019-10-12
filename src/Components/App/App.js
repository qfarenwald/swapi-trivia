import React, { Component } from 'react';
import './App.css';
import Form from '../Form/Form';
import MoviesContainer from '../MoviesContainer/MoviesContainer';
import Profile from '../Profile/Profile';
import Menu from '../Menu/Menu';
import  { Route, Link } from 'react-router-dom';
import CharactersContainer from '../CharactersContainer/CharactersContainer';
import { getMovies } from '../../apiCalls/apiCalls';


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

  removeUserState = () => {
    this.setState({
      user: null
    })
  }

  render() {
    return(
      <section className='App'>
        <Menu removeUserState={this.removeUserState}/>
        <Route exact path='/' render={() => <Form updateUserState={this.updateUserState}/>} />
        <Route exact path='/movies' render={() => <Profile name={this.state.user.name} quote={this.state.user.quote} status={this.state.user.status}/>} />
        <Route exact path='/movies' render={() => <h2>MOVIES</h2>} />
        <Route exact path='/movies' render={() => <MoviesContainer movies={this.state.movies} user={this.state.user} updateCurrentCharacters={this.updateCurrentCharacters}/>} />
        <Route exact path='/movies/:episode_id' render={() => {
          return (
            <div>
              <CharactersContainer characters={this.state.currentCharacters}/> 
            </div>
          )
        }}
        />
      </section>
    )
  }

}

export default App;
