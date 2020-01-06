import React from 'react';

import logo from '../../img/logo.svg';

const Navbar = () => {
  return (
    <header className='header'>
      <div className='navbar-container'>
        <img className='navbar-logo' src={logo}></img>
        <ul className='navbar-items'>
          <li className='navbar-item'>Register</li>
          <li className='navbar-item'>Login</li>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
