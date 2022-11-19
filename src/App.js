import React from 'react';
import { Route, Router, Routes } from 'react-router-dom';
import Ofertas from './pages/Ofertas';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Ofertas/>}/>
    </Routes>
  )
}

export default App;
