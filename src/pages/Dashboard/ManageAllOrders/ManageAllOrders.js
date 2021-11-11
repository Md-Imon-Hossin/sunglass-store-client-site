import React, { useEffect, useState } from 'react';

const ManageAllOrders = () => {
    const [orders,setOrders] = useState([]) 
    useEffect(()=>{
        fetch(`http://localhost:5000/allOrders`)
        .then(res=>res.json()) 
        .then(data=>setOrders(data))
    },[])
    return (
        <div>
            <h2>Manage All Orders {orders.length} </h2>



            
        </div>
    );
};

export default ManageAllOrders;