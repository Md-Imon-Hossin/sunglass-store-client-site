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
      {/* register your input into the hook by invoking the "register" function */}
      <input className='w-50' placeholder='Image Url' {...register("img")} />
      <br />
      <br />
      {/* include validation with required or other standard HTML validation rules */}
      <input className='w-50' type='text' placeholder='Name' {...register("name", { required: true })} />
      <br />
      <br />
      <input className='w-50' placeholder='Price' type='number'  {...register("price", { required: true })} />
      <br />
      <br />
      <textarea placeholder='Description' className='w-50'  {...register("description", { required: true })} />
      <br />
      
      {/* errors will return when field validation fails  */}
      {errors.exampleRequired && <span>This field is required</span>}
      
      <input className='btn btn-danger' type="submit" />
    </form>


        </div>
    );
};

export default AddProduct;