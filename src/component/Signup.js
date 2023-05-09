import React, { useState } from 'react';
import {TextField,Button,Typography,FormLabel} from '@mui/material';
import {Box} from '@mui/system';
import axios from 'axios';
import { useNavigate,NavLink} from 'react-router-dom';

const Signup = () => {
    const history=useNavigate();
    const[inputs,setInputs]=useState(
        {
            name:'',
            email:'',
            password:'',
          
        });
        const handleChange=(e)=>{
            setInputs((prevState)=>({
              ...prevState,
              [e.target.name]:e.target.value
            }))
          };
          const sendRequest=async()=>{
            await axios.post("http://localhost:5000/supplierManager/registerSupplierManager",{
              name:String(inputs.name),
              email:String(inputs.email),
              password:String(inputs.password),
            }).then((res)=>res.data);
          };
          const signup=(e)=>{
            e.preventDefault();
            console.log(inputs);
            sendRequest().then(()=>history('/Home'));
          };

  return (
    
    <div>
      <h1>SIGN UP</h1>
    <form onSubmit={signup}>
    <Box
    display="flex"
    flexDirection="column"
    justifyContent={"center"}
    maxWidth={300}
    alignContent={"center"}
    alignSelf="center"
    marginLeft={"auto"}
    marginRight={"auto"}
    marginTop={5}>
  <FormLabel>Name</FormLabel>
  <TextField name="name" variant="outlined"  value={inputs.name} onChange={handleChange} fullWidth  /><br/>
  <FormLabel>Email</FormLabel>
  <TextField name="email"  variant="outlined"  value={inputs.email} onChange={handleChange} fullWidth /><br/>
  <FormLabel>Password</FormLabel>
  <TextField name="password" type="password" variant="outlined" value={inputs.password} onChange={handleChange} fullWidth /><br/>
  <Button  variant="contained" color="secondary" size="medium" onClick={signup}  fullWidth>Sign up</Button><br/>
  <Button  variant="contained" color="secondary" size="medium" LinkComponent={NavLink} to="/"  fullWidth>Back</Button>
       
    </Box>
  </form>
  </div>
  )
}

export default Signup