import React from 'react';
import './Menu.css';
import { Route, Link } from 'react-router-dom';

const Menu = ( props ) => {

  return (
    <nav className="menu">
      <Route exact path='/movies' render={() => <h1 className='small-heading'><span className='yellow-text'>SW</span>API</h1>} />
      <div className="favandlog">
        <Route exact path='/movies' render={() => <p>FAVORITES</p>} />
        <Route exact path='/movies' render={() => <Link className="link" to='/'><p onClick={() => props.removeUserState()}>LOGOUT</p></Link>} />
      </div>
    </nav>
  )
}

export default Menu;
