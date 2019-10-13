import React from 'react';
import './Menu.css';
import { Route, Link } from 'react-router-dom';

const Menu = ( props ) => {

  return (
    <nav className="menu">
      <Route path='/movies' render={() => <h1 className='small-heading'><span className='yellow-text'>SW</span>API</h1>} />
      <Route path='/favorites' render={() => <h1 className='small-heading'><span className='yellow-text'>SW</span>API</h1>} />
      <div className="favandlog">
        <Route path='/movies' render={() => <Link className="link" to='/favorites'><p>FAVORITES</p></Link>} />
        <Route path='/favorites' render={() => <Link className="link" to='/favorites'><p>FAVORITES</p></Link>} />
        <Route path='/movies' render={() => <Link className="link" to='/'><p onClick={() => props.removeUserState()}>LOGOUT</p></Link>} />
        <Route path='/favorites' render={() => <Link className="link" to='/'><p onClick={() => props.removeUserState()}>LOGOUT</p></Link>} />
      </div>
    </nav>
  )
}

export default Menu;
