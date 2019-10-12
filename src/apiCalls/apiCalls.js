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
            characters: tenCharacters,
            opening_crawl: film.opening_crawl
          }
        })
      })
  }

export const getCharacterData = (characterURL) => {
  return fetch(characterURL)
    .then(res => res.json())
    .then(character => {
      const { name, homeworld, species, films } = character;
      return fecthAllCharacterData(homeworld, species, films)
        .then(res => ({name, res}))
    })
}

const fecthAllCharacterData = (homeworldURL, speciesURL, filmsURL) => {
  const homeworld = getHomeworld(homeworldURL)
  const species = getSpecies(speciesURL)
  const films = getFilms(filmsURL)
  return Promise.all( [homeworld, species, films] )
}

const getHomeworld = (homeworldURL) => {
  return fetch(homeworldURL)
    .then(res => res.json())
    .then(homeworld => {
      return ({
        home: homeworld.name,
        population: homeworld.population
      })
    })
}

const getSpecies = (speciesURL) => {
  return fetch(...speciesURL)
    .then(res => res.json())
    .then(species => {
      return species.name
    })
  }

const getFilms = (filmsURL) => {
  const films = filmsURL.map((film) => {
    return fetch(film)
      .then(res => res.json())
      .then(film => film.title)
  })
  return Promise.all(films)
}
