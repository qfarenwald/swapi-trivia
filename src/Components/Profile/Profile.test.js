import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import Profile from './Profile';

describe('Profile', () => {
  it('should match the snapshot with correct data', () => {

    const wrapper = shallow(
      <Profile
        name="Mike"
        quote="Hey"
        status="YODA"
      />
    );

    expect(wrapper).toMatchSnapshot()

  })
})
