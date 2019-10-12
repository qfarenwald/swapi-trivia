import React from 'react';
import './Movie.css';
import { Component } from 'react'
import { Link } from 'react-router-dom'

class Movie extends Component {
  constructor(props) {
    super()
    this.state = {
      characters: []
    }
    this.props = props;
  }

  componentDidMount = () => {
    let fetchedCharacters = [];
    this.props.characters.forEach((charac) => {
      fetch(charac)
        .then(res => res.json())
        .then(character => {
          return {
            name: character.name,
            homeworld: character.homeworld,
            species: character.species,
            films: character.films
          }
        })
        .then(character => fetchedCharacters.push(character))
        .catch(error => console.error('error'))
    })
    this.setState({ characters: fetchedCharacters})
  }

  render() {
    return (
      <section>
        <div className="movie-card">
          <h3>{this.props.title}</h3>
          <h4><span className="bold-text">EPISODE</span> {this.props.episode_id}</h4>
          <h4><span className="bold-text">RELEASE</span> {this.props.release_date}</h4>
        </div>
        <div className="view-charac">
          <Link to={`movies/${this.props.episode_id}`}><h5 onClick={() => this.props.updateCurrentCharacters(this.state.characters)}>VIEW CHARACTERS</h5></Link>
        </div>
      </section>
    )
}
}

export default Movie;
