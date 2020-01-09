import React, { Fragment, useState } from 'react';
import { connect } from 'react-redux';
import { setAlert } from '../../actions/alert';
import PropTypes from 'prop-types';

const Register = ({ setAlert }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    password2: ''
  });

  const { name, email, password, password2 } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async e => {
    e.preventDefault();
    if (password !== password2) {
      setAlert('Passwords do not match', 'danger');
    } else {
      /* const newUser = {
        name,
        email,
        password
      };

      try {
        // We are sending data so we need to create a config with headers
        const config = {
          headers: {
            'Content-Type': 'application/json'
          }
        };

        const body = JSON.stringify(newUser);
        const res = await axios.post(
          'http://localhost:5000/api/users',
          body,
          config
        );
        console.log(res.data);
      } catch (err) {
        console.error(err.response.data);
      } */
      console.log('Success...');
    }
  };

  return (
    <Fragment>
      <h1>Sign Up</h1>
      <p>Create your account</p>
      <form className='form' onSubmit={e => onSubmit(e)}>
        <input
          type='text'
          placeholder='Name'
          name='name'
          value={name}
          onChange={e => onChange(e)}
          required
        />
        <input
          type='email'
          placeholder='Email Address'
          name='email'
          value={email}
          onChange={e => onChange(e)}
          required
        />
        <input
          type='password'
          placeholder='Password'
          name='password'
          value={password}
          onChange={e => onChange(e)}
          minLength='6'
        />
        <input
          type='password'
          placeholder='Confirm Password'
          name='password2'
          value={password2}
          onChange={e => onChange(e)}
          minLength='6'
        />
        <input type='submit' className='btn' value='Register' />
      </form>
    </Fragment>
  );
};

Register.propTypes = {
  setAlert: PropTypes.func.isRequired
};

export default connect(null, { setAlert })(Register);
