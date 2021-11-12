import React, { useEffect, useState } from 'react';
const ManageProducts = () => {
 const [products,setProducts] = useState([])
    useEffect(()=>{
        fetch(`https://agile-sea-88546.herokuapp.com/products`)
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[])
    console.log(products)
    return (
        <div>
            {/* <h2>Manage Products {products.length} </h2> */}
        </div>
    );
};
export default ManageProducts;
