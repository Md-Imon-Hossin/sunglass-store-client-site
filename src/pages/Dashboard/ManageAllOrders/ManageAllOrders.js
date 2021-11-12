import React, { useEffect, useState } from 'react';
import './ManageAllOrders.css'
const ManageAllOrders = () => {
    const [orders,setOrders] = useState([]) 
    useEffect(()=>{
        fetch(`http://localhost:5000/allOrders`)
        .then(res=>res.json()) 
        .then(data=>setOrders(data))
    },[])
    return (
        <div>
            <h2 className='text-primary mb-3'>Manage All Orders {orders.length} </h2>

            <div className='manageAllOrdersContainer'>
            {
                orders.map(order=><div>
                    <div class="card h-100 mb-3" >
  <img style={{width : '50%', margin : '0 auto'}} src={order.img} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">{order.name}</h5>
    <h5 class="card-title">Price : {order.price}</h5>
    <p class="card-text">{order.description}</p>
   
  </div>
</div>
                </div>)
            }
            </div>

            
        </div>
    );
};

export default ManageAllOrders;