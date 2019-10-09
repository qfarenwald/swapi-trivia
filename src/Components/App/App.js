import React, { Component } from 'react';
import './App.css';
import Form from '../Form/Form';

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

  updateUserState = (userObj) => {
    this.setState({
      user: userObj
    })
  }

  render() {
    return(
      <section className='App'>
        <h1><span className='yellow-text'>SW</span>API</h1>
        {this.state.user ? <h2>MOVIES</h2> : <Form updateUserState={this.updateUserState}/>}
      </section>
    )
  }

}

export default App;
