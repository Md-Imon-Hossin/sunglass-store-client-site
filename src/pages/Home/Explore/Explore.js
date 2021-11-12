import React, { useEffect, useState } from 'react';
import './Explore.css'
const Explore = () => {
    // const {img,name,price,description} = addProduct

    const [productExplore,setProductExplore] = useState([])
    useEffect(()=>{
        fetch(`http://localhost:5000/exploreProduct`)
        .then(res=>res.json()) 
        .then(data=>setProductExplore(data))
    },[])
    return (
        <div>
            <h2>Explore Products</h2>
            <div className='explore-container'>
            {
                
                productExplore.map(productExplores=><div>
       
 <div className="card mb-3">
    <img style={{width : '50%',margin : '0 auto'}} src={productExplores?.img} className="card-img-top" alt="..." />
    <div className="card-body">
      <h5 className="card-title">{productExplores?.length}</h5>
      <h5 className="card-title">{productExplores?.price}</h5>
     <p className="card-text">{productExplores?.description}</p>
   </div>
   </div>
 
                 </div>
                 
                 
                 )
                 
             }
            </div>
           
        
        </div>
    );
};

export default Explore;