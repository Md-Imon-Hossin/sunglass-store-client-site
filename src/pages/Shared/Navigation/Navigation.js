import { Box } from '@mui/system';
import React from 'react';
import { Container,  Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import './Navigation.css'
const Navigation = () => {
  const {user,logOut} = useAuth()
    return (
        <>
        <Navbar bg="dark" variant="dark" collapseOnSelect expand="lg" sticky='top'>
          <Container>
          <Navbar.Brand href="#home">Sunglass Store</Navbar.Brand>
          <Navbar.Toggle />
    <Navbar.Collapse className="justify-content-end navbar-spacing">
    <Link style={{textDecoration : 'none'}} className='text-white'  to="/home">Home</Link>
    <Link style={{textDecoration : 'none'}} className='text-white'  to="/purchase">Purchase</Link>
    <Link style={{textDecoration : 'none'}} className='text-white'  to="/explore">Explore</Link>
   {
   user?.email ? 
   <Box>
     <Link to='/dashboard'>
   <button  className='btn text-white'>Dashboard</button>
   </Link>
 <button onClick={logOut} className='btn btn-danger'>Logout</button>
 {user?.email &&<Navbar.Text>
        Signed in as: <a href="#login">{user.displayName}</a>
      </Navbar.Text>}
   </Box>
  
   :
     <Link to='/login'>
   <button  className='btn text-white'>Login</button>
   </Link>
   }
      
    </Navbar.Collapse>
          </Container>
        </Navbar>
      </>
    );
};

export default Navigation;