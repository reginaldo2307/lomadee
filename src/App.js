import React, { useEffect, useState } from 'react'
import api from './service/api'

const App = () => {

  const [list, setList] = useState([]);
/*
  useEffect(()=> {
    
  }, []);
*/

const token = '166874105037989c21cb9';

const sourceId = '37737907';

  /*const itens = (token) => {
    
  }*/

  api.get(`/${token}/offer/_bestsellers?sourceId=${sourceId}` )
    .then((response) => setList(response.data))
    .catch((err) => {
      console.error("Não foi possível carregar" + err);
    });


  return(
    <div>
      
      Quantidade: {list.length}
    </div>
  )
}

export default App;