import React from 'react';
import { Link } from 'react-router-dom';
const Landing = () => {
  return (
    <section className='landing'>
      <div className='dark-overlay'>
        <div className='landing-inner'>
          <h1 className='x-large'>Some cool title</h1>
          <p className='lead'>Create a portfolio to manage your clients</p>
          <div className='buttons'>
            <Link to='/register' className='btn'>
              Sign Up
            </Link>
            <Link to='/login' className='btn'>
              Login
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Landing;
