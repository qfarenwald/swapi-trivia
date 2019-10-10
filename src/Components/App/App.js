import React, { Component } from 'react';
import './App.css';
import Form from '../Form/Form';
import MoviesContainer from '../MoviesContainer/MoviesContainer';

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
      fetch('https://swapi.co/api/films/')
        .then(res => res.json())
        .then(films => {
          return films.results.map((film) => {
            const newDate = film.release_date.split('-')[0]
            return {
              title: film.title,
              episode_id: film.episode_id,
              release_date: newDate
            }
          })
        })
        .then(films => this.setState({movies: films}))
        .catch(error => console.error('error'))
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
