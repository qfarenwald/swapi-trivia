export const getMovies = (moviesData) => {
    return fetch(moviesData)
      .then(res => res.json())
      .then(films => {
        return films.results.map((film) => {
          const newDate = film.release_date.split('-')[0]
          return {
            title: film.title,
            episode_id: film.episode_id,
            release_date: newDate
          }
        })
      })
  }

export const getCharacters = (characData) => {
  return fetch(characData)
    .then(res => res.json())
    .then(characters => console.log(characters))
}
