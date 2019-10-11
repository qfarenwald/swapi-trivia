import React from 'react';
import Movie from '../Movie/Movie'
import './MoviesContainer.css';

const MoviesContainer = ( props ) => {
  const moviesCont = props.movies.map((movie) => {
    return <Movie
    title={movie.title}
    episode_id={movie.episode_id}
    release_date={movie.release_date}
    id={movie.episode_id}
    key={movie.episode_id}
    characters={movie.characters}
    updateCurrentCharacters={props.updateCurrentCharacters}
    />
  })

  return (
    <main className="movies-container">
      {moviesCont}
    </main>
  )
}

export default MoviesContainer;
