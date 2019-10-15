import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import CharactersContainer from './CharactersContainer';

describe('CharactersContainer', () => {

  it('should match the snapshot with correct data', () => {
    const mockCurrentCharacters = [{
      films: "The Phantom Menace",
      homeworld: "Jabba Desilijic Tiure",
      name: "Jabba Desilijic Tiure",
      population: "7000000000",
      species: "Hutt",
      url: "https://swapi.co/api/people/16/"
    }, {
      films: "The Phantom Menace",
      homeworld: "Jabba Desilijic Tiure",
      name: "Jabba Desilijic Tiure",
      population: "7000000000",
      species: "Hutt",
      url: "https://swapi.co/api/people/16/"
    }]

    const mockUpdateFavoriteCharacters = jest.fn()

    const wrapper = shallow(
      <CharactersContainer
        characters={mockCurrentCharacters} updateFavoriteCharacters={mockUpdateFavoriteCharacters}
        favorites="true"
        checkFavoriteStatus="true"
      />
    );

    expect(wrapper).toMatchSnapshot()

  })

})
