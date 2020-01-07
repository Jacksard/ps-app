import React, { Fragment, useState } from 'react';

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    password2: ''
  });

  const { name, email, password, password2 } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    if (password !== password2) {
      console.log('Passwords do not match');
    } else {
      console.log(formData);
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

export default Register;
