import React, { useEffect, useState } from 'react';

const ManageProducts = () => {
 const [products,setProducts] = useState([])
    useEffect(()=>{
        fetch(`http://localhost:5000/products`)
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


// import React, { useEffect, useState } from 'react';

// const ManageProducts = () => {
//  const [products,setProducts] = useState([])
//     useEffect(()=>{
//         fetch(`http://localhost:5000/products`)
//         .then(res=>res.json())
//         .then(data=>setProducts(data))
//     },[])
//     console.log(products)
//     return (
//         <div>
//             <h2>Manage Products {products.length} </h2>
//            <h2 className='text-primary'>{products.name}</h2>
//         </div>
//     );
// };

// export default ManageProducts;