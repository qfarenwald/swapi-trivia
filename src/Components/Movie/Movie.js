import React from 'react';
import './Movie.css';
// import { getCharacters } from '../../apiCalls/apiCalls';

//movies should be class

const Movie = (props) => {

// put getCharacters elsewhere
  const getCharacters = () => {
    return props.characters.forEach((charac) => {
      fetch(charac)
        .then(res => res.json())
        .then(character => {
            return {
              homeworld: character.homeworld,
              species: character.species,
              films: character.films
            }
          })
        .then(character => console.log(character))
        .catch(error => console.error('error'))
      })
    }

  return (
    <section>
      <div className="movie-card">
        <h3>{props.title}</h3>
        <h4><span className="bold-text">EPISODE</span> {props.episode_id}</h4>
        <h4><span className="bold-text">RELEASE</span> {props.release_date}</h4>
      </div>
      <div className="view-charac">
        <h5 onClick={event => getCharacters()}>VIEW CHARACTERS</h5>
      </div>
    </section>
  )
}

export default Movie;
