import { Alert, Button, CircularProgress, TextField, Typography } from '@mui/material';

import React, { useState } from 'react';
import { Link,useLocation,useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
  
const Login = () => {
    // useState 
    const [loginData,setLoginData] = useState({}) 
    const {user,loginUser,isLoading,authError} = useAuth()
    const location = useLocation() 
    const history = useHistory() 
    // Handle OnChange 
    const handleOnChange = e=>{
    const field = e.target.name ;
    const value = e.target.value ;
    const newLoginData = {...loginData} 
    newLoginData[field] = value 
    setLoginData(newLoginData)
}
    // Handle Login Submit 
    const handleLoginSubmit = e =>{
   loginUser(loginData.email, loginData.password,location,history)
        e.preventDefault() 
    }
    return (
        <div className='py-5'>
            <div className="container">
                <div className="row shadow ">
                    <div className="col">

    <Typography className='mt-5' variant='body1'>Login</Typography>
    <form   onSubmit={handleLoginSubmit}>
    <TextField
    sx={{width : '50%', m : 1}}
     id="standard-basic" 
     type='email'
     label="Email" 
     name = 'email' 
     onBlur = {handleOnChange}
     variant="standard" />
     <br />
    <TextField
    sx={{width : '50%', m : 1}}
     id="standard-basic" 
     type='password'
     label="Password"
     name = 'password' 
     onBlur= {handleOnChange} 
     variant="standard" />
 <br />
 <Button sx={{width : '50%'}} className='my-3' variant='contained' type='submit'>Login</Button>
 <br />
 <Link style={{textDecoration : 'none'}} to='/register'>
 <Button className='my-3' variant='text' >New User ? Please Register</Button>
 </Link>


 {
    isLoading && <CircularProgress />
}

{
    user?.email && <Alert severity="success">Login Successfully</Alert>

}
{
    authError && <Alert severity="error">{authError}</Alert>

}

    </form>
                    </div>
                </div>
            </div>
       </div>
    );
};
   
export default Login;