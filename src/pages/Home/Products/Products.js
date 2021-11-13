import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Products.css'

const Products = () => {
    const limit = 6;
    const [products,setProducts] = useState([]) 
    // useEffect(()=>{
    //     fetch(`https://agile-sea-88546.herokuapp.com/products`)
    //     .then(res=>res.json()) 
    //     .then(data=>setProducts(data))
    // },[])
    useEffect(()=>{
        fetch(`https://agile-sea-88546.herokuapp.com/products/query?limit=${limit}`)
        .then(res=>res.json()) 
        .then(data=>setProducts(data))
    },[])
    console.log(products)
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