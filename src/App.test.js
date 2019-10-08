import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import App from './App';

describe('App', () => {

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('should match the snapshot with correct data', () => {
    const wrapper = shallow(<App />);

    expect(wrapper).toMatchSnapshot();
  });

  it('should update user state with data from form', () => {
    const wrapper = shallow(<App />);

    const mockUserObj = {
      name: 'Mike',
      quote: 'May the force be with you',
      status: 'Jedi'
    }

    wrapper.instance().updateUserState(mockUserObj);

    expect(wrapper.state('user')).toEqual(mockUserObj);
  })

})
