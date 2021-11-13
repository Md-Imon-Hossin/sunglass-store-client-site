import React from 'react';
import { useForm } from "react-hook-form";
const Review = () => {
    const { register, handleSubmit,  formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data);
        fetch(`https://agile-sea-88546.herokuapp.com/reviews`,{
            method : 'POST',
            headers : {'content-type' : 'application/json'},
            body: JSON.stringify(data)
        }) 
        .then(res=>res.json()) 
        .then(result=>console.log(result))
    } 
    return (
        <div>
            <h2 >This is  Review</h2>
            
            <form onSubmit={handleSubmit(onSubmit)}>
      <input className='w-50' type='name' placeholder='Name' {...register("name")} />
      <br />
      <br />
      <input className='w-50' type="text" placeholder='Profession'   {...register("profession")} />
      <br /> <br />
      <input className='w-50' placeholder='Rating' type='number'  {...register("rating",{min:0,max:5})} />
      <br />
      <br />
      <textarea placeholder='Description' className='w-50'  {...register("description")} />
      <br />
      
      <input className='btn btn-danger' type="submit" />
    </form>
        </div>
    );
};

export default Review;