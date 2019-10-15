import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('App', () => {

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

  it('should update user with currentCharacters and currentMovie Data', () => {
    const wrapper = shallow(<App />);

    const characters = [{name: 'Quinn'}, {name: 'Mike'}];
    const movieData = [{episode: 'I'}, {episode: 'IV'}];

    wrapper.instance().updateCurrentCharacters(characters, movieData);

    expect(wrapper.state('currentCharacters')).toEqual(characters);
    expect(wrapper.state('currentMovie')).toEqual(movieData);
  })

})
