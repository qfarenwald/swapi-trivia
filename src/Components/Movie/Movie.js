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
    this.movieData = {
      episode_id : this.props.episode_id,
      title: this.props.title,
      opening_crawl: this.props.opening_crawl
    }
  }

  componentDidMount = () => {
    let fetchedCharacters = [];
    this.props.characters.forEach((charac) => {
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
          <Link className="link" to={`movies/${this.props.episode_id}`}><h5 onClick={() => this.props.updateCurrentCharacters(this.state.characters, this.movieData)}>VIEW CHARACTERS</h5></Link>
        </div>
      </section>
    )
}
}

export default Movie;
