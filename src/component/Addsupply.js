import React, { useState } from 'react';
import {TextField,Button,Typography,FormLabel} from '@mui/material';
import {Box} from '@mui/system';
import axios from 'axios';
import { useNavigate,NavLink} from 'react-router-dom';

const Addsupply= () => {
  const history=useNavigate();
  const[inputs,setInputs]=useState(
    {
        name:'',
        weight:'',
        payment:'',
        collectorName:'',
        date:'',
        
    });

    const handleChange=(e)=>{
      setInputs((prevState)=>({
        ...prevState,
        [e.target.name]:e.target.value
      }))
    };

    const sendRequest=async()=>{
      await axios.post("http://localhost:5000/supplies",{
        name:String(inputs.name),
        weight:String(inputs.weight),
        payment:String(inputs.payment),
        collectorName:String(inputs.collectorName),
        date:String(inputs.date),
      }).then((res)=>res.data);
    };
    const handleSubmit=(e)=>{
      e.preventDefault();
      console.log(inputs);
      sendRequest().then(()=>history('/supplies'));
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
        <Typography variant='h4' align='center'>Add Supply</Typography>
            <FormLabel>Supplier Name</FormLabel>
            <TextField name="name" variant="outlined"  value={inputs.name} onChange={handleChange} fullWidth  /><br/>
            <FormLabel>Weight</FormLabel>
            <TextField name="weight" type="number" variant="outlined"  value={inputs.weight} onChange={handleChange} fullWidth /><br/>
            <FormLabel>Payment</FormLabel>
            <TextField name="payment" variant="outlined" value={inputs.payment} onChange={handleChange} fullWidth /><br/>
            <FormLabel>Collector Name</FormLabel>
            <TextField name="collectorName" variant="outlined"  value={inputs.collectorName} onChange={handleChange} fullWidth/><br/>
            <FormLabel>Date</FormLabel>
            <TextField name="date" type="date" variant="outlined"  value={inputs.date} onChange={handleChange} fullWidth/><br/>
            <Button variant="contained"   size="medium" type="submit"  fullWidth >Add Supply</Button><br/>
            <Button  variant="contained" color="secondary" size="medium"  LinkComponent={NavLink} to="/Home" fullWidth>Back</Button>
        </Box>
      </form>
      </div>
  )
}

export default Addsupply