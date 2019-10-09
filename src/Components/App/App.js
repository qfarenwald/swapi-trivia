import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      user: {},
      movies: [],
      currentMovie: {},
      currentCharacters: [],
      favoriteCharacters: []
    }
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
        <input />
        <input />
        <button>SUBMIT</button>

      </section>
    )
  }

}

export default App;
