import { Alert, Button, CircularProgress, TextField, Typography } from '@mui/material';

import React, { useState } from 'react';
import { Link,useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
  
const Register = () => {
    // useState 
    const [loginData,setLoginData] = useState({})
    const history = useHistory()  
    const {authError, user ,registerUser,isLoading} = useAuth()
    // Handle OnChange 
    const handleOnBlur = e=>{
    const field = e.target.name ;
    const value = e.target.value ;
    const newLoginData = {...loginData} 
    newLoginData[field] = value 
    setLoginData(newLoginData)
}
    // Handle Login Submit 
    const handleLoginSubmit = e =>{
        if(loginData.password !== loginData.password2){
            alert('Password did not match')
            return
        }
        registerUser(loginData.email, loginData.password,history,loginData.name) 
        e.preventDefault() 
    }
    return (
        <div className='py-5'>
            <div className="container">
                <div className="row shadow ">
                    <div className="col">
    <Typography className='mt-5' variant='body1'>Register</Typography>
    {!isLoading &&  <form   onSubmit={handleLoginSubmit}>
    <TextField
    sx={{width : '50%', m : 1}}
     id="standard-basic" 
     type='text'
     label="Name" 
     name = 'name' 
     onBlur = {handleOnBlur}
     variant="standard" />
    <TextField
    sx={{width : '50%', m : 1}}
     id="standard-basic" 
     type='email'
     label="Email" 
     name = 'email' 
     onBlur = {handleOnBlur}
     variant="standard" />
     <br />
    <TextField
    sx={{width : '50%', m : 1}}
     id="standard-basic" 
     type='password'
     label="Password"
     name = 'password' 
     onBlur= {handleOnBlur} 
     variant="standard" />
    <TextField
    sx={{width : '50%', m : 1}}
     id="standard-basic" 
     type='password'
     label="Retype Password"
     name = 'password2' 
     onBlur= {handleOnBlur} 
     variant="standard" />
 <br />
 <Button sx={{width : '50%'}} className='my-3' variant='contained' type='submit'>Register</Button>
 <br />
 <Link style={{textDecoration : 'none'}} to='/login'>
 <Button className='my-3' variant='text' >Already Registered ? Please Login</Button>
 </Link>
    </form>}
    {
    isLoading && <CircularProgress />
}

{
    user?.email && <Alert severity="success">User Created successfully!</Alert>

}
{
    authError && <Alert severity="error">{authError}</Alert>

}
                    </div>
                </div>
            </div>
       </div>
    );
};
   
export default Register;