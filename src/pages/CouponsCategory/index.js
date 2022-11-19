import React, { useEffect, useState } from "react";
import './index.css'
import api from "../../service/api";
import Header from "../../components/Header";
//import BookIcon from '@mui/icons-material/Book';

const CouponCategory = () => {

    const [categories, setCategories] = useState([]);

    const token = '166874105037989c21cb9';

    const sourceId = '37737907';

    useEffect(()=> {
        api.get(`/v2/${token}/coupon/_categories?sourceId=${sourceId}` )
        .then((response) => {
          setCategories(response.data)
        })
        .catch((err) => {
          console.log(err);
        })
        
    },[])

    return (
        <div className="container-categories">
            <Header/>
            <h2>Encontre cupons em nossas principais categorias</h2>
            <div className="categories-list">
                {categories?.categories?.map((categorie, key) => {
                    return (
                        <div className="categories-name" key={key}>
                            <span>
                                <a href={categorie.link}>
                                {categorie?.name }
                                </a>
                                
                            </span>
                            
                        </div>
                    )
                })}
            </div>

        </div>
    )
}

export default CouponCategory;