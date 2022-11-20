import React, { useEffect, useState } from 'react'
import Header from '../../components/Header';
import api from '../../service/api'
import './index.css'

const CupomLojas = () => {

  const [stores, setStores] = useState({});
/*
  useEffect(()=> {
    
  }, []);
*/

const token = '166874105037989c21cb9';

const sourceId = '37737907';

  /*const itens = (token) => {
    
  }*/


useEffect(()=> {
  api.get(`/v2/${token}/coupon/_stores?sourceId=${sourceId}` )
  .then((response) => {
    setStores(response.data)
  })
  .catch((err) => {
    console.log(err);
  })
  
},[])


/*
useEffect(() => {
  fetch(`http://sandbox-api.lomadee.com/v1/${token}/coupon/_categories?sourceId=${sourceId}`, {
    method: 'GET',
    mode: 'no-cors',
    headers: {
      'Content-Type': 'application/json'
    }
  })
  .then((response) => response.json())
  .then((json) => {
    setStores(json)
  })
  .catch((error) => console.log)
}, [])

*/
  return(
    <div className='home' >
      <Header/>
      <h2>Cupom por Loja</h2>
      <div className='cupom-loja' >
        {stores?.stores?.map((store, index) => {
          return (
            <div className='cupom-item' key={index}>
              <a href={store.link} target='_blank'>
                <img src={store.image} alt='Imagem' width={125} />
              </a>
            </div>
          )
        })}
      </div>
    </div> 
     
  )
}

export default CupomLojas;