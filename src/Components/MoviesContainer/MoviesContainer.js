import React from 'react';
import Movie from '../Movie/Movie';
import './MoviesContainer.css';
import PropTypes from 'prop-types';

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
    opening_crawl={movie.opening_crawl}
    />
  })

  let returnRender;
  if (props.movies.length === 7) {
    returnRender = moviesCont
  } else {
    returnRender = <img src='https://media3.giphy.com/media/hQgJCEdGOEHa8/source.gif' alt="loading..."/>
  }

  return (
    <main className="movies-container">
      {returnRender}
    </main>
  )
}

export default MoviesContainer;

MoviesContainer.propTypes = {
  movies: PropTypes.array,
  user: PropTypes.object,
  updateCurrentCharacters: PropTypes.func
}
