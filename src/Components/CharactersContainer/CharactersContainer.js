import React from 'react'
import './CharactersContainer.css';
import Characters from '../Characters/Characters'

const CharactersContainer = (props) => {
  let characters = props.characters.map((character) => {
    const index = (character.url.split('/')[5])
    return (<Characters
      key={index}
      id={index}
      name={character.name}
      homeworld={character.homeworld}
      species={character.species}
      films={character.films}
      population={character.population}
      updateFavoriteCharacters={props.updateFavoriteCharacters}
      url={character.url}
      isFavorite={props.favorites}
      checkFavoriteStatus={props.checkFavoriteStatus}
    />
    )
  })

  return (
    <section className="charac-container">
      {characters.length === 0 ? 
      <div className="prompt">
        <p className="favorite-que">Favorite characters</p>
        <div className="heart"></div>
        <p className="favorite-que">to see them here!</p>
      </div> : null}
      {characters}
    </section>
  )
}

export default CharactersContainer;
