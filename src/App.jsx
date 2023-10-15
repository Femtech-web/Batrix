/* eslint-disable no-unused-vars */

import React, { Fragment } from 'react';
import { Routes, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import BatterySaver from './components/BatterySaver';

function App() {

  return (
    <Fragment>
      <Routes >
        <Route exact path='/' element={<LandingPage />} />
        <Route exact path='/apps' element={<BatterySaver />} />
      </Routes>
    </Fragment>
  )
}

export default App
