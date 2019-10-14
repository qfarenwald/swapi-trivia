import React from 'react'
import { Component } from 'react';
import './Characters.css'
import { isProperty } from '@babel/types';

class Characters extends Component {
  constructor(){
    super()
    this.state = {
      isFavorited: false
    }
  }

  render() {
    return (
      <section className="charac-card">
        <div className="favorite" onClick={() => {
          this.props.updateFavoriteCharacters(this.props)
          this.state.isFavorited ? this.setState({ isFavorited: false}) : this.setState({ isFavorited: true})
          }}>
        </div>
        <h3>{this.props.name}</h3>
        <h4><span className="bold-text">SPECIES </span>{this.props.species}</h4>
        <h4><span className="bold-text">HOMEWORLD </span>{this.props.homeworld}</h4>
        <h4><span className="bold-text">POPULATION </span>{this.props.population}</h4>
        <h4><span className="bold-text">OTHER MOVIES </span>{this.props.films}</h4>
      </section>
    )
  }
}

export default Characters;
