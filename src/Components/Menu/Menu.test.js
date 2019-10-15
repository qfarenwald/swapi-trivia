import React from 'react';
import { shallow } from 'enzyme';
import Menu from './Menu';

describe('Menu', () => {

  it('Should match the snapshot', () => {
    const mockRemoveUserState = jest.fn();
    const mockFavoriteCharacters = [{
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
    const wrapper = shallow( <
      Menu
        removeUserState={mockRemoveUserState}
        favoriteCharacters={mockFavoriteCharacters}
      /> );
    expect(wrapper).toMatchSnapshot();
  })

  // it('Should run removeUserState on click when showing movie component', () => {
  //   const mockRemoveUserState = jest.fn();
  //   const mockFavoriteCharacters = [{
  //     films: "The Phantom Menace",
  //     homeworld: "Jabba Desilijic Tiure",
  //     name: "Jabba Desilijic Tiure",
  //     population: "7000000000",
  //     species: "Hutt",
  //     url: "https://swapi.co/api/people/16/"
  //   }, {
  //     films: "The Phantom Menace",
  //     homeworld: "Jabba Desilijic Tiure",
  //     name: "Jabba Desilijic Tiure",
  //     population: "7000000000",
  //     species: "Hutt",
  //     url: "https://swapi.co/api/people/16/"
  //   }]
  //   const wrapper = shallow( <
  //     Menu
  //       removeUserState={mockRemoveUserState}
  //       favoriteCharacters={mockFavoriteCharacters}
  //     /> );
  //
  //   wrapper.find('p').simulate('click');
  //
  //   expect(mockRemoveUserState).toHaveBeenCalled();
  // })

})
