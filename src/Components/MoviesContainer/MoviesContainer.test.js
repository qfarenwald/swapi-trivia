import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import MoviesContainer from './MoviesContainer';

describe('MoviesContainer', () => {
  it('should match snapshot with correct data', () => {
    const mockMovies = [
      1, 2, 3
    ]
    const wrapper = shallow(
      <MoviesContainer
      movies={mockMovies}/>
    );

    expect(wrapper).toMatchSnapshot()
  });

});
