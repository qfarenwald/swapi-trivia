import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import Movie from './Movie';

describe('Movie', () => {
  it('should match snapshot with correct data', () => {
    const wrapper = shallow(
      <Movie
      title='Empire Strikes Back'
      episode_id='4'
      release_date='1998'
      id='4'
      key='4'/>
    );

    expect(wrapper).toMatchSnapshot()
  });

});
