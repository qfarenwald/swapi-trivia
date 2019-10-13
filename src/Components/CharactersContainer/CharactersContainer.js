import React from 'react'
import './CharactersContainer.css';
import Characters from '../Characters/Characters'

const CharactersContainer = (props) => {
  let characters = props.characters.map((character, index) => {
    console.log(character)
    return (<Characters
      key={index}
      name={character.name}
      homeworld={character.homeworld}
      species={character.species}
      films={character.films}
      population={character.population}
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
