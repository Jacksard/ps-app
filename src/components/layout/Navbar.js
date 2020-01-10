import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import logo from '../../img/logo.svg';
import PropTypes from 'prop-types';

import { logout } from '../../actions/auth';

const Navbar = ({ auth: { isAuthenticated, loading }, logout }) => {
  const authLinks = (
    <ul className='navbar-items'>
      <li className='navbar-item'>
        <a onClick={logout} href='#!'>
          Logout
        </a>
      </li>
    </ul>
  );
  const guestLinks = (
    <ul className='navbar-items'>
      <Link to='/register'>
        <li className='navbar-item'>Register</li>
      </Link>
      <Link to='/login'>
        <li className='navbar-item'>Login</li>
      </Link>
    </ul>
  );
  return (
    <header className='header'>
      <div className='navbar-container'>
        <img className='navbar-logo' src={logo} alt='img' />
      </div>
      {!loading && (
        <Fragment>{isAuthenticated ? authLinks : guestLinks}</Fragment>
      )}
    </header>
  );
};
Navbar.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({ auth: state.auth });

export default connect(mapStateToProps, { logout })(Navbar);
