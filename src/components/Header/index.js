import React from "react";
import './index.css';
import Logo from '../../assets/images/logo.png'

const Header = () => {

  const handleRegister = () => {
    alert('Clicou')
  }

  return (
  <div className="header">
    <div className="logo">
      <a href={'/'}>
        <h2>CupomAqui</h2>
      </a>
    </div>
    <div className="search-offers">
      <input type="search"/>
    </div>
    
    <div className="botoes-header">
      <div className="menu">
        <ul >
          <li ><a href={'/lojas'}>Lojas</a></li>
          <li><a href={'/categorias'}>Categorias</a></li>
          <li><a href="">Black Friday</a></li>
          <button className="register" onClick={handleRegister}>Entrar</button>
        </ul>
      </div>
    </div>
    
  </div>
  )
}

export default Header;