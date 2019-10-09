import React from 'react';
import { shallow } from 'enzyme';
import Form from './Form';

describe('Form', () => {
  it('should match the snapshot', () => {
    const wrapper = shallow(<Form
        updateUserState={jest.fn()}
      />);
      expect(wrapper).toMatchSnapshot();
    });
});