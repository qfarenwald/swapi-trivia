import React from 'react';
import { shallow } from 'enzyme';
import Characters from './Characters';

describe('Characters', () => {

  it('should match snapshot with proper data', () => {
    const mockCheckFavoriteStatus = jest.fn()
    const mockUpdateFavoriteCharacters = jest.fn()
    const wrapper = shallow(<
      Characters
        key={1}
        id={1}
        name="Mike"
        homeworld="Turing"
        species="Boss"
        films="Life In A Basement"
        population={30}
        updateFavoriteCharacters={mockUpdateFavoriteCharacters}
        url="www.turing.io"
        isFavorite={true}
        checkFavoriteStatus={mockCheckFavoriteStatus}
      />)

      expect(wrapper).toMatchSnapshot();
  })

  it('should call updateFavoriteCharacters on click', () => {
    const mockUpdateFavoriteCharacters = jest.fn()
    const mockCheckFavoriteStatus = jest.fn()
    const wrapper = shallow(<
      Characters
        key={1}
        id={1}
        name="Mike"
        homeworld="Turing"
        species="Boss"
        films="Life In A Basement"
        population={30}
        updateFavoriteCharacters={mockUpdateFavoriteCharacters}
        url="www.turing.io"
        isFavorite={true}
        checkFavoriteStatus={mockCheckFavoriteStatus}
      />)

    wrapper.find('div').simulate('click')

    expect(mockUpdateFavoriteCharacters).toHaveBeenCalled();

  })

})
