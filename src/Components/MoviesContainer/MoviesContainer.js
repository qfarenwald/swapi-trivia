import React from 'react';
import Movie from '../Movie/Movie';
import Profile from '../Profile/Profile';
import './MoviesContainer.css';

const MoviesContainer = ( {movies, user} ) => {

  console.log('user', user)

    const moviesCont = movies.map((movie) => {
      return <Movie
      title={movie.title}
      episode_id={movie.episode_id}
      release_date={movie.release_date}
      id={movie.episode_id}
      key={movie.episode_id}
      characters={movie.characters}/>
    })

    const profile =
      <Profile
        name={user.name}
        quote={user.quote}
        status={user.status}
      />

  return (
    <main className="movies-container">
      {profile}
      {moviesCont}
    </main>
  )
}

export default MoviesContainer;
