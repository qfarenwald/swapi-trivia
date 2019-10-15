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

  it('should update name in form state when updateFormState is run', () => {
    const mockFunction = jest.fn()
    const wrapper = shallow(<Form
        updateUserState={mockFunction}
      />);

    const inputEvent = {
      target: {
        name: 'name', value: 'Mike'
      }
    }

    wrapper.instance().updateFormState(inputEvent)

    expect(wrapper.state('name')).toEqual(inputEvent.target.value)
  })

  it('should update quote in form state when updateFormState is run', () => {
    const mockFunction = jest.fn()
    const wrapper = shallow(<Form
        updateUserState={mockFunction}
      />);

    const inputEvent = {
      target: {
        name: 'quote', value: 'Hey'
      }
    }

    wrapper.instance().updateFormState(inputEvent)

    expect(wrapper.state('quote')).toEqual(inputEvent.target.value)
  })

  it('should update status in form state when updateFormState is run', () => {
    const mockFunction = jest.fn()
    const wrapper = shallow(<Form
        updateUserState={mockFunction}
      />);

    const inputEvent = {
      target: {
        name: 'status', value: 'Cool'
      }
    }

    wrapper.instance().updateFormState(inputEvent)

    expect(wrapper.state('status')).toEqual(inputEvent.target.value)
  })

  it('should call errorHandling when updateFormState is called', () => {
    const mockFunction = jest.fn()
    const wrapper = shallow(<Form
        updateUserState={mockFunction}
      />);

    const inputEvent = {
      target: {
        name: 'quote', value: 'Hey'
      }
    }

    const mockErrorHandling = jest.fn()

    wrapper.instance().errorHandling = jest.fn()

    wrapper.instance().updateFormState(inputEvent);

    expect(wrapper.instance().errorHandling).toHaveBeenCalled();
  })

  it('should set isValid in state to true when errorHandling is called', () => {
    const mockFunction = jest.fn()
    const wrapper = shallow(<Form
        updateUserState={mockFunction}
      />);
    const mockState = {
      name: '',
      quote: '',
      status: '',
      isValid: false
    }
    const expectState = {
      name: 'Mike',
      quote: 'Hey',
      status: 'Cool',
      isValid: true
    }
    const inputName = {
      target: {
        name: 'name', value: 'Mike'
      }
    }
    const inputQuote = {
      target: {
        name: 'quote', value: 'Hey'
      }
    }
    const inputStatus = {
      target: {
        name: 'status', value: 'YODA'
      }
    }

    wrapper.setState(mockState);
    wrapper.instance().updateFormState(inputName);
    wrapper.instance().updateFormState(inputQuote);
    wrapper.instance().updateFormState(inputStatus);
    wrapper.instance().errorHandling();

    expect(wrapper.state('isValid')).toEqual(true);
  })

});
