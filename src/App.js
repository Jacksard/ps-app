import React, { Fragment } from 'react';
import './App.css';

import Navbar from './components/layout/Navbar';
import Landing from './components/layout/Landing';

import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <Fragment>
      <Router>
        <Navbar />
        <Landing />
      </Router>
    </Fragment>
  );
}

export default App;
