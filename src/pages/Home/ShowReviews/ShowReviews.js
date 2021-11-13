import React from 'react';
import Rating from '@mui/material/Rating';

const ShowReviews = ({review}) => {

    const {name,description,price,rating} = review  ;
    
    const [value, setValue] = React.useState(rating);

    return (
        <div>

        {/*  */}
        <div className="card mb-3" >
  <div className="card-body">
    <h3 className="card-title">{name}</h3>
    {/* <h5 className="card-title">{price}</h5> */}
    {/* <h5 className="card-title">{rating}    */}
    <Rating name="read-only"  value={value} readOnly />

    {/* </h5> */}
    <p className="card-text">{description}</p>
  </div>
</div>
{/*  */}
        </div>
    );
};

export default ShowReviews;