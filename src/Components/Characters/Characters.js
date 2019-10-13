import React from 'react'
import './Characters.css'

const Characters = (props) => {
  return (
    <section className="charac-card">
        <p className="favorite" onClick={() => props.updateFavoriteCharacters(props)}>FAVORITE</p>
      <h3>{props.name}</h3>
      <h4><span className="bold-text">SPECIES </span>{props.species}</h4>
      <h4><span className="bold-text">HOMEWORLD </span>{props.homeworld}</h4>
      <h4><span className="bold-text">POPULATION </span>{props.population}</h4>
      <h4><span className="bold-text">OTHER MOVIES </span>{props.films}</h4>
    </section>
  )
}

export default Characters;
