import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Products.css'

const Products = () => {
    const [products,setProducts] = useState([]) 
    useEffect(()=>{
        fetch('http://localhost:5000/products')
        .then(res=>res.json()) 
        .then(data=>setProducts(data))
    },[])
    return (
        <div >
            <h2 className='text-dark py-4'>New Products </h2>
           <div className='products-container mb-4' >
           {
                products.map(product=><Product
                key= {product._id} 
                product={product}
                ></Product>)
            }
           </div>

        </div>
    );
};

export default Products;