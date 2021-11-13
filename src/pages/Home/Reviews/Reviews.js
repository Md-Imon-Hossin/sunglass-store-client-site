import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import ShowReviews from '../ShowReviews/ShowReviews';
import './Reviews.css'
const Reviews = () => {
    const [reviews,setReviews] = useState([])

    useEffect(()=>{
        fetch(`https://agile-sea-88546.herokuapp.com/reviews`)
        .then(res=>res.json()) 
        .then(data=>setReviews(data))
    },[])
    return (
        <div>
            <h2 className='mb-4'>Show Reviews</h2>
            <Container>
            <Row xl={3} lg={3} md={2} sm={1}>
            {
            reviews.map(review=><ShowReviews
                key={review.name}
                review={review}
                >
                </ShowReviews>)
            }
                
            </Row>
            </Container>
           
        </div>
    );
};

export default Reviews;