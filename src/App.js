import React, { useEffect, useState } from 'react'
import api from './service/api'
import './App.css'

const App = () => {

  const [stores, setStores] = useState([]);
/*
  useEffect(()=> {
    
  }, []);
*/

const token = '166874105037989c21cb9';

const sourceId = '37737907';

  /*const itens = (token) => {
    
  }*/

/*
useEffect(()=> {
  api.get(`/v2/${token}/coupon/_stores?sourceId=${sourceId}` )
  .then((response) => {
    setStores(response.stores)
  })
  .catch((err) => {
    console.log(err);
  })
  
},[])

*/

useEffect(() => {
  fetch(`http://sandbox-api.lomadee.com/v2/${token}/coupon/_categories?sourceId=${sourceId}`, {
    method: 'GET',
    headers: {
      'Access-Control-Allow-Origin': 'http://localhost:3000'
    }
  })
  .then((response) => response.json())
  .then((json) => {
    setStores(json)
  })
  .catch((error) => console.log)
}, [])


  return(
    <div>
        {stores.map((item) => {
          const {categories} = item;
          return (
            <div>
              {categories}
            </div>
          )
        })}
    </div>   
  )
}

export default App;