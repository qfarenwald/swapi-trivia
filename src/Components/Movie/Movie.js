import React from 'react';
import './Movie.css';

const Movie = (props) => {

  return (
    <section>
      <div className="movie-card">
        <h3>{props.title}</h3>
        <h4><span className="bold-text">EPISODE</span> {props.episode_id}</h4>
        <h4><span className="bold-text">RELEASE</span> {props.release_date}</h4>
      </div>
      <div className="view-charac">
        <h5>VIEW CHARACTERS</h5>
      </div>
    </section>
  )
}

export default Movie;
