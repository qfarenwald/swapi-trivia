import React from 'react';
import Movie from '../Movie/Movie'
import './MoviesContainer.css';

const MoviesContainer = ( {movies} ) => {
  console.log(movies)
  return (
    movies.map((movie) => {
      return <Movie
      title={movie.title}
      episode_id={movie.episode_id}
      release_date={movie.release_date}
      id={movie.episode_id}
      key={movie.episode_id}/>
    })
  )
}

export default MoviesContainer;
