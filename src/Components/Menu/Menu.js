import React from 'react';
import './Menu.css';

const Menu = ( props ) => {

  return (
    <nav>
      <h1><span className='yellow-text'>SW</span>API</h1>
      <p>FAVORITES</p>
      <p onClick={() => props.removeUserState()}>LOGOUT</p>
    </nav>
  )
}

export default Menu;
