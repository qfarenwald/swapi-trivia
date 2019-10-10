import React from 'react';
import './Movie.css';

const Movie = (props) => {
  return (
    <section className="movie-card">
      <h3>{props.title}</h3>
      <h4>EPISODE {props.episode_id}</h4>
      <h4>RELEASE{props.release_date}</h4>
      <h5>VIEW CHARACTERS</h5>
    </section>
  )
}

export default Movie;
