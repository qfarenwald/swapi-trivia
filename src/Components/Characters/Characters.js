import React from 'react'
import './Characters.css'
import { isProperty } from '@babel/types';

const Characters = (props) => {
  return (
    <section className="charac-card">
      <div className="favorite" onClick={() => {
        props.updateFavoriteCharacters(props)
        props.isFavorited ? props.isFavorited = false : props.isFavorited = true
        }}>
      </div>
      <h3>{props.name}</h3>
      <h4><span className="bold-text">SPECIES </span>{props.species}</h4>
      <h4><span className="bold-text">HOMEWORLD </span>{props.homeworld}</h4>
      <h4><span className="bold-text">POPULATION </span>{props.population}</h4>
      <h4><span className="bold-text">OTHER MOVIES </span>{props.films}</h4>
    </section>
  )
}

export default Characters;
