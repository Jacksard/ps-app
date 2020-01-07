import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../../img/logo.svg';

const Navbar = () => {
  return (
    <header className='header'>
      <div className='navbar-container'>
        <img className='navbar-logo' src={logo} alt='img' />
        <ul className='navbar-items'>
          <Link to='/register'>
            <li className='navbar-item'>Register</li>
          </Link>
          <Link to='/login'>
            <li className='navbar-item'>Login</li>
          </Link>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
