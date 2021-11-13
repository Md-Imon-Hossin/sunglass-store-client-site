import React from 'react';
import Rating from '@mui/material/Rating';
import { Col } from 'react-bootstrap';

const ShowReviews = ({review}) => {

    const {name,description,rating,profession} = review  ;
    
    const [value, setValue] = React.useState(rating);

    return (
        <Col>

        <div className="card mb-3" >
  <div className="card-body">
    <h3 className="card-title">{name}</h3>
    <h5 className="card-title">{profession}</h5>
    <Rating name="read-only"  value={value} readOnly />

    <p className="card-text">{description}</p>
  </div>
</div>
        </Col>
    );
};

export default ShowReviews;