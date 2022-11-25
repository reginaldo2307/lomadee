import React, { useEffect, useState } from "react";
import './index.css';
import Logo from '../../assets/images/logo.png'
import { useNavigate } from "react-router-dom";
import api from '../../service/api'

const Header = () => {

  const navigate = useNavigate();

  const [search, setSearch] = useState('');


  useEffect(() => {
    api.get(`/v3/${token}/offer/_search?sourceId=${sourceId}&keyword=${setSearch}`)
      .then((response) => {
        setSearch(response.data)
      })
      .catch((err) => {
        console.log(err);
      })
  }, [])

  const token = '166874105037989c21cb9';
  const sourceId = '37737907';

  const handleRegister = () => {
    navigate('/cadastro');
  }

  return (
  <div className="header">
    <div className="logo">
      <a href={'/'}>
        <h2>CuponMania</h2>
      </a>
    </div>
    <div className="search-offers">
      <input 
        type="search"
        onChange={e => setSearch(e.target.value)}
        placeholder="Pesquise por ofertas"
        value={search}
      />
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
    {search?.offers?.filter((offer) => {
      if (search === '') {
        return offer;
      } else if (offer.name.toLowerCase().includes(offer.toLowerCase())) {
        return offer;
      }
    }).map((offer, index) => {
      <div key={index}>
        <span>{offer.name}</span>
      </div>
    })}
  </div>
  )
}

export default Header;