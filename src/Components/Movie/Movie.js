import React from 'react';
import './Movie.css';
import { Component } from 'react';
import { Link } from 'react-router-dom';
import { getCharacterData } from '../../apiCalls/apiCalls';

class Movie extends Component {
  constructor(props) {
    super()
    this.state = {
      characters: [],
      waitingForLoad: true
    }
    this.props = props;
    this.movieData = {
      episode_id : this.props.episode_id,
      title: this.props.title,
      opening_crawl: this.props.opening_crawl
    }
  }

  componentDidMount = () => {
    console.log("Movie component Did Mount, Now Fetching Character Data")
    let fetchedCharacters = [];
    this.props.characters.forEach((charac) => {
      getCharacterData(charac)
        .then(character => {
          return {
            name: character.name,
            homeworld: character.res[0].home,
            population: character.res[0].population,
            species: character.res[1],
            films: character.res[2][0],
            url: charac
          }
        })
        .then(character => {
          fetchedCharacters.push(character)
          if (fetchedCharacters.length === 10) {
            setInterval(() => {
              this.setState({ waitingForLoad: false}) 
            }, 500);
          }
        })
        .catch(error => console.error('error'))
    })
    this.setState({ 
      characters: fetchedCharacters 
    })
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
          {this.state.waitingForLoad ?
          <img src='https://media3.giphy.com/media/hQgJCEdGOEHa8/source.gif' alt="loading..."/> : <Link className="link" to={`movies/${this.props.episode_id}`}><h5 onClick={() => this.props.updateCurrentCharacters(this.state.characters, this.movieData)}>VIEW CHARACTERS</h5></Link>}
        </div>
      </section>
    )
}
}

export default Movie;
