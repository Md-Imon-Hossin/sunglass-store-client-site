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
            <Row lg={3}>
            {
            reviews.map(review=><ShowReviews review={review}
                >
                </ShowReviews>)
            }
                
            </Row>
            </Container>
           
        </div>
    );
};

export default Reviews;