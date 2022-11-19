import React from "react";
import './index.css';
import Logo from '../../assets/images/logo.png'

const Header = () => {

  return (
  <div className="header">
    <div className="logo">
      <img src={Logo} alt='logo' width={150} />
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
        </ul>
      </div>
    </div>
    
  </div>
  )
}

export default Header;