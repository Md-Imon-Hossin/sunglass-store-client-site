import React, { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import { useParams } from 'react-router';
import useAuth from '../../hooks/useAuth';
import './Purchase.css'
const Purchase = () => {
    const{user} = useAuth()
    const { register, handleSubmit } = useForm();
    const {productId} = useParams()
    const [product,setProduct] = useState({})
    const email = sessionStorage.getItem('email')
    useEffect(()=>{
        fetch(`https://agile-sea-88546.herokuapp.com/singleProduct/${productId}`)
        .then(res=>res.json())
        .then(data=>setProduct(data))
    },[productId])
    const onSubmit = (data) => {
      data.email = email ;
        fetch("https://agile-sea-88546.herokuapp.com/confirmOrder",{
            method : 'POST',
            headers : {"content-type" : "application/json"},
            body : JSON.stringify(data)
        })
        .then(res=>res.json()) 
        .then(result=>console.log(result))
        console.log(data);
       
    } 
    return (
        <div className='form-container py-5'>

       <div className="container">
       <div className="row">
            <div className="col-xl-6 col-lg-6">
            <div className="card" >
  <img style={{width : "50%",margin : '0 auto'}} src={product.img} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{product.name}</h5>
    <h6 className="card-title">Price : {product.price}</h6>
    <p className="card-text">{product.description}</p>
  </div>
</div>
            </div>
            <div className="col-xl-6 col-lg-6">
            <h2 className='mb-3'>Do You Purchase Now ?</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("email", )} placeholder='Email' defaultValue={user?.email} />

      <input {...register("name", )} placeholder='Name' defaultValue={product?.name} />

      <textarea {...register("description", )} placeholder='Description' defaultValue={product?.description} />

      <input type="number" {...register("price", )} placeholder='Price' defaultValue={product?.price}/>

      <input placeholder='Image Url' {...register("img", )} defaultValue={product?.img} />
      <input placeholder='Address' {...register("address", )}  />

      <input placeholder='Phone' {...register("number", )} type='number' />

      <input className='btn btn-warning' type="submit" value='Order Now' />
    </form>
            </div>
        </div>
       </div>
        </div>
    );
};

export default Purchase;