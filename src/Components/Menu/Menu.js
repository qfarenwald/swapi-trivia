import React from 'react';
import './Menu.css';
import { Link } from 'react-router-dom';

const Menu = ( props ) => {

  return (
    <nav>
      <h1><span className='yellow-text'>SW</span>API</h1>
      <p>FAVORITES</p>
      <Link to='/'><p onClick={() => props.removeUserState()}>LOGOUT</p></Link>
    </nav>
  )
}

export default Menu;
