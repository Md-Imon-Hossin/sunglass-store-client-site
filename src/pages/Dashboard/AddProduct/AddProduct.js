import React from 'react';
 import './AddProduct.css'
 import { useForm } from "react-hook-form";

const AddProduct = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data);
        fetch(`http://localhost:5000/addProduct`,{
            method : 'POST',
            headers : {'content-type' : 'application/json'},
            body: JSON.stringify(data)
        }) 
        .then(res=>res.json()) 
        .then(result=>console.log(result))
    } 
    return (
        <div>
            <h2 className='mb-3'>Please Add a product</h2>

            <form onSubmit={handleSubmit(onSubmit)}>
      <input className='w-50' placeholder='Image Url' {...register("img")} />
      <br />
      <br />
      <input className='w-50' type='name' placeholder='Name' {...register("name")} />
      <br />
      <br />
      <input className='w-50' placeholder='Price' type='number'  {...register("price")} />
      <br />
      <br />
      <textarea placeholder='Description' className='w-50'  {...register("description")} />
      <br />
      
      <input className='btn btn-danger' type="submit" />
    </form>
        </div>
    );
};

export default AddProduct;