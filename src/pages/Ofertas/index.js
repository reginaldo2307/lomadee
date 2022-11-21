import React, {useEffect, useState} from "react";
import './index.css'
import api from '../../service/api'
import { Link } from "react-router-dom";
import Header from "../../components/Header";

const Ofertas = () => {

    const [ofertas, setOfertas] = useState({});

    useEffect(()=> {
        api.get(`/v3/${token}/offer/_category/2?sourceId=${sourceId}` )
        .then((response) => {
          setOfertas(response.data)
        })
        .catch((err) => {
          console.log(err);
        })
        
    },[])

    const token = '166874105037989c21cb9';

    const sourceId = '37737907';

    return (
    <div className='ofertas' >
      <Header/>
      <h2>Bestsellers de ofertas</h2>
      <div className='cupom-ofertas' >
        {ofertas?.offers?.map((oferta, index) => {
            return (
                <div className="card-ofertas" key={index}>
                    <img src={oferta.thumbnail} alt='Imagem' width={125} style={{padding: '5px 15px', borderRadius: '15px'}} />
                    <div style={{display: 'flex', flexDirection: 'column'}} >
                        <span>
                            {oferta.name}
                        </span>
                        <span>
                           R$ {oferta.price}
                        </span>
                        <Link to={oferta.link}>
                        <button style={{position: 'relative', cursor: 'pointer', border: '0', borderRadius: '2px', outline: '0', bottom: '-10px', padding: '10px', backgroundColor: '#E0C9CB'}} >IR PARA LOJA</button>
                        </Link>
                    </div>
                </div>
            )
        })}
      </div>
    </div> 
    )
}

export default Ofertas; 