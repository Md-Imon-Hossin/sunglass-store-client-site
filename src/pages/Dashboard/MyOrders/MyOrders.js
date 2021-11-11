import { Button } from '@mui/material';
import React, { useEffect, useState } from 'react';
// import Service from '../Service/Service';
const MyOrders = () => {
    const email = sessionStorage.getItem('email') 
    const [services,setServices] = useState([])
    // const [control,setControl] = useState(false) 
    useEffect(()=>{
        fetch(`http://localhost:5000/myOrders/${email}`)
        .then(res=>res.json())
        .then(data=>setServices(data))
    },[])
    // // Handle Delete 
    // const handleDelete = (id)=>{
    //     fetch(`http://localhost:5000/deleteOrder/${id}`,{
    //         method : 'DELETE',
    //     })
    //     .then(res=>res.json()) 
    //     .then(data=>{
    //         if(data.deletedCount){
    //             setControl(!control)
    //         }
    //         console.log(data)
    //     })
        
    // }
    return (
        <div>
            <h2>My Orders</h2>
            <div className='services-container'>
            

               {
                   services?.map(service=>
                    <div>
                        <div className="container">
                            <div className="row">
                                <div className="col">
                                <div className='card w-50 mb-4'>
        <img style={{width : "50%", margin : "0 auto"}} src={service?.img} className="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title">{service?.name}</h5>
          <h5 className="card-title">Price : {service?.price}</h5>
          <p className="card-text">{service?.description}</p>
          <Button  variant='contained'>Cancel</Button>
        </div>
      </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    )
               }
            </div>
           
        </div>
    );
};

export default MyOrders;