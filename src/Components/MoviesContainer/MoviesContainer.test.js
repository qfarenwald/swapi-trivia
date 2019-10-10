import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import MoviesContainer from './MoviesContainer';

describe('MoviesContainer', () => {
  it('should match snapshot with correct data', () => {
    const mockMovies = [
      {
        title: 'A New Hope',
        episode_id: 4,
        release_date: 1977,
        id: 4,
        key: 4
      },
      {
        title: 'Attack Of The Clones',
        episode_id: 2,
        release_date: 2002,
        id: 2,
        key: 2
      }
    ]
    const wrapper = shallow(
      <MoviesContainer
      movies={mockMovies}/>
    );

    expect(wrapper).toMatchSnapshot()
  });

});
