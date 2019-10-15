import React, { Component } from 'react';
import './App.css';
import Form from '../Form/Form';
import MoviesContainer from '../MoviesContainer/MoviesContainer';
import Profile from '../Profile/Profile';
import Menu from '../Menu/Menu';
import ScrollingText from '../ScrollingText/ScrollingText';
import  { Route } from 'react-router-dom';
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
   getMovies()
     .then(films => films.sort((a, b) => parseInt(a.episode_id) - parseInt(b.episode_id)))
     .then(films => this.setState({movies: films}))
     .catch(error => console.error('error'))
  }

  updateUserState = (userObj) => {
    this.setState({ user: userObj })
  }

  updateCurrentCharacters = (characters, movieData) => {
    this.setState({ currentCharacters : characters });
    this.setState({ currentMovie : movieData });
  }

  updateFavoriteCharacters = (character) => {
    let safeToAdd = true;
    this.state.favoriteCharacters.forEach((favorite, index) => {
      if (favorite.id === character.id) {
        safeToAdd = false;
        let favchars = this.state.favoriteCharacters;
        favchars.splice(index, 1);
        this.setState( { favoriteCharacters: favchars})
      }
    });
    if (safeToAdd === true) {
      const favCharacArray = [...this.state.favoriteCharacters]
      favCharacArray.push(character)
      this.setState({ favoriteCharacters: favCharacArray })
    }
  }
  
  checkFavoriteStatus = (character) => {
    return this.state.favoriteCharacters.find(favorite => favorite.id === character.id)
  }

  removeUserState = () => {
    this.setState({
      user: null
    })
  }

  render() {
    return(
      <section className='App'>
        <Route path='/movies' render={() => <Menu removeUserState={this.removeUserState} favoriteCharacters={this.state.favoriteCharacters}/>} />
        <Route exact path='/favorites' render={() => <Menu removeUserState={this.removeUserState} favoriteCharacters={this.state.favoriteCharacters}/>} />
        <Route exact path='/' render={() => <h1><span className='yellow-text'>SW</span>API</h1>} />
        <Route exact path='/' render={() => <Form updateUserState={this.updateUserState}/>} />
        <Route path='/movies' render={() => <Profile name={this.state.user.name} quote={this.state.user.quote} status={this.state.user.status}/>} />
        <Route path='/favorites' render={() => <Profile name={this.state.user.name} quote={this.state.user.quote} status={this.state.user.status}/>} />
        <Route exact path='/movies' render={() => <h2>EPISODES</h2>} />
        <Route exact path='/movies/:id' render={() => <ScrollingText movieData={this.state.currentMovie}/>} />
        <Route exact path='/movies/:id' render={() => <h2>CHARACTERS</h2>} />
        <Route exact path='/movies' render={() => <MoviesContainer movies={this.state.movies} user={this.state.user} updateCurrentCharacters={this.updateCurrentCharacters}/>} />
        <Route exact path='/favorites' render={() => <h2>FAVORITES</h2>} />
        <Route exact path='/favorites' render={() => <CharactersContainer characters={this.state.favoriteCharacters} updateFavoriteCharacters={this.updateFavoriteCharacters} favorites={true} checkFavoriteStatus={this.checkFavoriteStatus}/>} />
        <Route exact path='/movies/:episode_id' render={() => {
          return (
            <div>
              <CharactersContainer characters={this.state.currentCharacters} updateFavoriteCharacters={this.updateFavoriteCharacters} favorites={false} checkFavoriteStatus={this.checkFavoriteStatus}/>
            </div>
          )
        }}
        />
      </section>
    )
  }

}

export default App;
