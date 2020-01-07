import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const { email, password } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async e => {
    e.preventDefault();

    console.log('Success...');
  };

  return (
    <Fragment>
      <h1>Enter credentials</h1>

      <form className='form' onSubmit={e => onSubmit(e)}>
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

        <input type='submit' className='btn' value='Login' />
      </form>
      <p>
        Don't have an account? <Link to='/register'>Sign Up</Link>
      </p>
    </Fragment>
  );
};
export default Register;
