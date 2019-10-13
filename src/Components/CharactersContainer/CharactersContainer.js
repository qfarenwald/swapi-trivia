import React from 'react'
import './CharactersContainer.css';
import Characters from '../Characters/Characters'

const CharactersContainer = (props) => {
  let characters = props.characters.map((character, index) => {
    const newIndex = props.characters.url
    console.log('newIndex', newIndex)
    return (<Characters
      key={index}
      name={character.name}
      homeworld={character.homeworld}
      species={character.species}
      films={character.films}
      population={character.population}
      updateFavoriteCharacters={props.updateFavoriteCharacters}
    />
    )
  })

  return (
    <section className="charac-container">
      {characters}
    </section>
  )
}

export default CharactersContainer;
