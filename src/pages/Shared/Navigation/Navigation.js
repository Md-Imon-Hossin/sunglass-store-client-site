import React from 'react';
import { Container,  Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
// import { HashLink } from 'react-router-hash-link';
import './Navigation.css'
const Navigation = () => {
    return (
        <>
        
        <Navbar bg="dark" variant="dark" collapseOnSelect expand="lg" sticky='top'>
          <Container>
          <Navbar.Brand href="#home">Sunglass</Navbar.Brand>
          <Navbar.Toggle />
    <Navbar.Collapse className="justify-content-end navbar-spacing">
    <Link style={{textDecoration : 'none'}} className='text-white'  to="/home">Home</Link>
    {/* <Link className='text-white' style={{textDecoration : 'none',}} to="/addProduct">Add  Product</Link>  */}
   
      <Navbar.Text>
        Signed in as: <a href="#login">Mark Otto</a>
      </Navbar.Text>
    </Navbar.Collapse>
          </Container>
        </Navbar>
      
       
      </>
    );
};

export default Navigation;