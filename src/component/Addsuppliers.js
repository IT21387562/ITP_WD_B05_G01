import React, { useState } from 'react';
import {TextField,Button,Typography,FormLabel} from '@mui/material';
import {Box} from '@mui/system';
import axios from 'axios';
import { useNavigate,NavLink} from 'react-router-dom';

const Addsuppliers = () => {
  const history=useNavigate();
  const[inputs,setInputs]=useState(
    {
        name:'',
        threshold:'',
        email:'',
        contact:'',
        adressline1:'',
        adressline2:'',
        adressline3:'',
        date:'',
    });

    const handleChange=(e)=>{
      setInputs((prevState)=>({
        ...prevState,
        [e.target.name]:e.target.value
      }))
    };

    const sendRequest=async()=>{
      await axios.post("http://localhost:5000/suppliers",{
        name:String(inputs.name),
        threshold:String(inputs.threshold),
        email:String(inputs.email),
        contact:String(inputs.contact),
        adressline1:String(inputs.adressline1),
        adressline2:String(inputs.adressline2),
        adressline3:String(inputs.adressline3),
        date:String(inputs.date),
      }).then((res)=>res.data);
    };
    const handleSubmit=(e)=>{
      e.preventDefault();
      console.log(inputs);
      sendRequest().then(()=>history('/suppliers'));
    };
      
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Box
        display="flex"
        flexDirection="column"
        justifyContent={"center"}
        maxWidth={700}
        alignContent={"center"}
        alignSelf="center"
        marginLeft={"auto"}
        marginRight={"auto"}
        marginTop={5}>
        <Typography variant='h4' align='center'>Supplier Registration</Typography>
            <FormLabel>Name</FormLabel>
            <TextField name="name" variant="outlined"  value={inputs.name} onChange={handleChange} fullWidth  /><br/>
            <FormLabel>Threshold</FormLabel>
            <TextField name="threshold" type="number" variant="outlined"  value={inputs.threshold} onChange={handleChange} fullWidth /><br/>
            <FormLabel>Email</FormLabel>
            <TextField name="email" variant="outlined" value={inputs.email} onChange={handleChange} fullWidth /><br/>
            <FormLabel>Contact</FormLabel>
            <TextField name="contact" variant="outlined"  value={inputs.contact} onChange={handleChange} fullWidth/><br/>
            <FormLabel>Address Line 1</FormLabel>
            <TextField name="adressline1" variant="outlined"  value={inputs.adressline1} onChange={handleChange} fullWidth /><br/>
            <FormLabel>Address Line 2</FormLabel>
            <TextField name="adressline2" variant="outlined"  value={inputs.adressline2} onChange={handleChange} fullWidth /><br/>
            <FormLabel>Address Line 3</FormLabel>
            <TextField name="adressline3" variant="outlined"  value={inputs.adressline3} onChange={handleChange} fullWidth /><br/>
            <FormLabel>Date</FormLabel>
            <TextField name="date" type="date" varaint="outlined"  value={inputs.date} onChange={handleChange} fullWidth /><br/>
            <Button variant="contained"   size="medium" type="submit"  fullWidth >Register</Button><br/>
            <Button  variant="contained" color="secondary" size="medium"  LinkComponent={NavLink} to="/Home" fullWidth>Back</Button>
        </Box>
      </form>
      </div>
  )
}

export default Addsuppliers