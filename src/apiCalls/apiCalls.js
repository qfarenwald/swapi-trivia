export const getMovies = (moviesData) => {
    return fetch(moviesData)
      .then(res => res.json())
      .then(films => {
        return films.results.map((film) => {
          const newDate = film.release_date.split('-')[0]
          const tenCharacters = film.characters.slice(0, 10)
          return {
            title: film.title,
            episode_id: film.episode_id,
            release_date: newDate,
            characters: tenCharacters
          }
        })
      })
  }

export const getCharacters = (characData) => {
  return fetch(characData)
    .then(res => res.json())
}
