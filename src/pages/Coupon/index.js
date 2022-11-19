import React, {useEffect, useState} from "react";
import './index.css'
import api from '../../service/api'
import { Link } from "react-router-dom";

const Coupon = () => {

    const [coupons, setCoupons] = useState([]);

    useEffect(()=> {
        api.get(`/v2/${token}/coupon/_all?sourceId=${sourceId}` )
        .then((response) => {
            setCoupons(response.data)
        })
        .catch((err) => {
          console.log(err);
        })
        
    },[])

    const token = '166874105037989c21cb9';

    const sourceId = '37737907';

    return (
    <div className='ofertas' >
      <h2>Show de cupons</h2>
      <div className='cupom-ofertas' >
        {coupons?.coupons?.map((coupon, index) => {
            return (
                <div className="card-ofertas" key={index}>
                    <img src={coupon.store.image} alt='Imagem' width={125} style={{padding: '5px 15px', borderRadius: '15px'}} />
                    <div style={{display: 'flex', flexDirection: 'column'}} >
                        <span>
                            {coupon.description}
                        </span>
                        <span>
                           Código: {coupon.code}
                        </span>
                        <Link to={coupon.link}>
                        <button style={{position: 'relative', cursor: 'pointer', border: '0', borderRadius: '2px', outline: '0', bottom: '-10px', padding: '10px', backgroundColor: '#E0C9CB'}} >PEGAR CUPON</button>
                        </Link>
                    </div>
                </div>
            )
        })}
      </div>
    </div> 
    )
}

export default Coupon; 