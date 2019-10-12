import React from 'react';
import './Movie.css';
import { Component } from 'react';
import { Link } from 'react-router-dom';
import { getCharacterData } from '../../apiCalls/apiCalls';

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
    const characArray = this.props.characters.map((charac) => {
      getCharacterData(charac)
        .then(character => {
          return {
            name: character.name,
            homeworld: character.res[0].home,
            population: character.res[0].population,
            species: character.res[1],
            films: character.res[2][0]
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
