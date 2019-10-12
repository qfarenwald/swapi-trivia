import React from 'react'
import './Characters.css'

const Characters = (props) => {
  return (
    <section className="charac-card">
      <p>{props.name}</p>
      <p>{props.species}</p>
      <p>{props.homeworld}</p>
      <p>{props.population}</p>
      <p>{props.films}</p>
    </section>
  )
}

export default Characters;
