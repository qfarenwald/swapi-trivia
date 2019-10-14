import React from 'react';
import { shallow } from 'enzyme';
import Menu from './Menu';

describe('Menu', () => {
  
  beforeEach(() => {
  })
  
  it('Should match the snapshot', () => {
    const wrapper = shallow( <Menu /> );
    expect(wrapper).toMatchSnapshot();
  })
})