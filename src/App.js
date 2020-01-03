import React from 'react';

import './App.css';

import logo from './img/logo.svg';

function App() {
  return (
    <div className='App'>
      <header className='header'>
        <div className='navbar-container'>
          <img className='navbar-logo' src={logo}></img>
          <ul className='navbar-items'>
            <li className='navbar-item'>Register</li>
            <li className='navbar-item'>Login</li>
          </ul>
        </div>
      </header>
      <body></body>
    </div>
  );
}

export default App;
