import React from 'react'
import './CharactersContainer.css';
import Characters from '../Characters/Characters'

const CharactersContainer = (props) => {
  console.log("these are CharactersContainer  props::", props)
  let characters = props.characters.map((character, index) => {
    console.log(character)
    return (<Characters
      key={index}
      name={character.name}
      homeworld={character.homeworld}
      species={character.species}
      films={character.films}
    />
    )
  })

  return (
    <section>
      {characters}
    </section>
  )
}

export default CharactersContainer;