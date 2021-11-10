import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import './AddHomeProduct.css'
const AddHomeProduct = () => {
    const { register, handleSubmit,reset } = useForm();
    const onSubmit = data => {
        console.log(data);
        axios.post('http://localhost:5000/products',data)
        .then(res=>{
            if(res.data.insertedId){
                alert('Added Successfully')
                reset()
            }
            console.log(res) 
        })
    } 
    return (
        <div className='form-container py-5'>
            <h2>Please Add a Home product</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("name", { required: true, maxLength: 20 })} placeholder='Name' />
      <textarea {...register("description", )} placeholder='Description' />
      <input type="number" {...register("price", )} placeholder='Price'/>
      <input placeholder='Image Url' {...register("img", )} />

      <input className='btn btn-warning' type="submit" />
    </form>



        </div>
    );
};

export default AddHomeProduct;