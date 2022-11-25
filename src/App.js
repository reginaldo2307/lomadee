import React from 'react';
import { Route, Router, Routes } from 'react-router-dom';
import CupomLojas from './pages/CupomLojas';
import Coupon from './pages/Coupon';
import Ofertas from './pages/Ofertas';
import Register from './pages/register';
import CouponCategory from './pages/CouponsCategory';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Ofertas/>}/>
      <Route path='/lojas' element={<CupomLojas/>}/>
      <Route path='/cupons' element={<Coupon/>}/>
      <Route path='/categorias' element={<CouponCategory/>}/>
      <Route path='/cadastro' element={<Register/>}/>
    </Routes>
  )
}

export default App;
