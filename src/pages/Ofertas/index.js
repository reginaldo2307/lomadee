import React, {useEffect, useState} from "react";
import './index.css'
import api from '../../service/api'
import { Link } from "react-router-dom";
import Header from "../../components/Header";

const Ofertas = () => {

    const [ofertas, setOfertas] = useState({});
    const [valor, setValor] = useState('');
    const [pageCount, setPagecount] = useState(0);
    const [totalPage, setTotalpage] = useState();
    const [category, setCategory] = useState();



    useEffect(()=> {
        api.get(`/v2/${token}/offer/_all?sourceId=${sourceId}` )
        .then((response) => {
          setOfertas(response.data)
        })
        .catch((err) => {
          console.log(err);
        })
        
    },[])

    useEffect(()=> {
      api.get(`/v2/${token}/offer/_category/6424?sourceId=${sourceId}` )
      .then((response) => {
        setCategory(response.data)
      })
      .catch((err) => {
        console.log(err);
      })
      
  },[])

   

    const token = '166874105037989c21cb9';
    const sourceId = '37737907';

  /*
    useEffect(() => {
      const numberFormat = (valor) => 
      new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
      }).format(valor)
    setValor(numberFormat);
    }, [])
  */

    

    return (
    <div className='ofertas' >
      <Header/>
      <h2>Bestsellers de ofertas</h2>
      Quantidade de Ofertas: {ofertas?.pagination?.totalSize}
      <div className='cupom-ofertas' >
        {ofertas?.offers?.map((oferta, index) => {  
            return (                
                <div className="card-ofertas" key={index}>
                    <img src={oferta.thumbnail} alt='Imagem' width={135} style={{padding: '1px', borderRadius: '10px'}} />
                    <div style={{display: 'flex', flexDirection: 'column'}} >
                        <span>
                          {oferta.name}
                        </span>
                         {oferta.price.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}
                        <Link to={oferta.link}>
                        <button style={{position: 'relative', cursor: 'pointer', border: '0', borderRadius: '2px', outline: '0', bottom: '-10px', padding: '10px', backgroundColor: '#E0C9CB'}} >IR PARA LOJA</button>
                        </Link>
                    </div>
                </div>   
            )
        })}
      </div>
      <h2>Notebook</h2>
      <div className='cupom-ofertas' >
        {category?.offers?.map((categorie, index) => {
          return (
            <div className="card-ofertas" key={index}>
              <img src={categorie.thumbnail} alt='Imagem' width={135} style={{padding: '1px', borderRadius: '10px'}} />
              <div style={{display: 'flex', flexDirection: 'column'}} >
                <span>
                  {categorie.name}
                </span>
                  {categorie.price.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}
                <Link to={categorie.link}>
                  <button style={{position: 'relative', cursor: 'pointer', border: '0', borderRadius: '2px', outline: '0', bottom: '-10px', padding: '10px', backgroundColor: '#E0C9CB'}} >IR PARA LOJA</button>
                </Link>
              </div>
            </div>
          )})}
          </div>
      </div> 
    )
}

export default Ofertas; 
