import React from 'react';
import { Button, Card } from 'react-bootstrap';

const Product = ({product}) => {
    const {img,name,price,description} = product
    return (
        
   <Card className='h-100 shadow '>
  <Card.Img variant="top" style={{width : '60%',margin : 'auto'}} src={img} />
  <Card.Body>
    <Card.Title>{name}</Card.Title>
    <Card.Title className='my-3'>
        price : {price}
        </Card.Title>
    <Card.Text>
    {description}
    </Card.Text>
    <Button variant="warning">Buy Now</Button>
  </Card.Body>
</Card>
        
    );
};

export default Product;