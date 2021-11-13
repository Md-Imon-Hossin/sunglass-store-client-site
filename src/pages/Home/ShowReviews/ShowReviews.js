import React from 'react';
import Rating from '@mui/material/Rating';

const ShowReviews = ({review}) => {

    const {name,description,price,rating} = review  ;
    
    const [value, setValue] = React.useState(rating);

    return (
        <div>
            <h2>Show reviews</h2>
            <Rating name="read-only" value={value} readOnly />
        <p>{name}</p>
        
        </div>
    );
};

export default ShowReviews;