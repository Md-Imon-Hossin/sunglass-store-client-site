import { Button, Link } from '@mui/material';
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

            {
                orders.map(order=><div>
                    <div class="card w-50 mb-3" >
  <img src={order.img} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">{order.name}</h5>
    <h5 class="card-title">Price : {order.price}</h5>
    <p class="card-text">{order.description}</p>
   {/* <Link>
   <Button></Button>
   </Link> */}
  </div>
</div>
                </div>)
            }

            
        </div>
    );
};

export default ManageAllOrders;