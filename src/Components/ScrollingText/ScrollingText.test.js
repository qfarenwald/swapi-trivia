import React from 'react';
import { shallow } from 'enzyme';
import ScrollingText from './ScrollingText';

describe('Scrolling Text', () => {
  
  beforeEach(() => {
  })
  
  it('Should match the snapshot', () => {
    const movieData = {episode_id: 4}
    const wrapper = shallow( <ScrollingText movieData={movieData}/> );
    expect(wrapper).toMatchSnapshot();
  })
})