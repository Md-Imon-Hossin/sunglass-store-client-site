import React, { useEffect, useState } from 'react';
import ShowReviews from '../ShowReviews/ShowReviews';
import './Reviews.css'
// import Rating from '@mui/material/Rating';

const Reviews = () => {
    const [reviews,setReviews] = useState([])
    // const [value, setValue] = React.useState(2);

    useEffect(()=>{
        fetch(`https://agile-sea-88546.herokuapp.com/reviews`)
        .then(res=>res.json()) 
        .then(data=>setReviews(data))
    },[])
    return (
        <div>
            <h2 className='mb-4'>Show Reviews</h2>
            {/* <h2>This is reviews  {reviews.length} </h2> */}
            {/* <Rating name="read-only" value={value} readOnly /> */}
            {
            reviews.map(review=><ShowReviews
            
            review={review}
                >

                </ShowReviews>)
        }
            
        
        </div>
    );
};

export default Reviews;