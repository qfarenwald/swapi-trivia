import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      user: {},
      movies: [],
      currentMovie: {},
      currentCharacters: []
    }
  }

  render() {
    return(
      <h1>Hello</h1>
    )
  }

}

export default App;
