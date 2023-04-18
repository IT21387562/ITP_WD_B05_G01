
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams,NavLink } from 'react-router-dom';
import {TextField,Button,Typography,FormLabel} from '@mui/material';
import {Box} from '@mui/system';

const SuppliesDetail = () => {
    const [input,setInputs]=useState({});
    const id=useParams().id;
    const history=useNavigate();
    useEffect(()=>{
        const fetchHandler=async()=>{
            await axios
            .get(`http://localhost:5000/supplies/${id}`)
            .then((res)=>res.data)
            .then(data=>setInputs(data.supplies));
        };
        fetchHandler()
    },[id]);

    const sendRequest=async()=>{
         await axios.put(`http://localhost:5000/supplies/${id}`,{
            name:String(input.name),
            weight:String(input.weight),
            payment:String(input.payment),
            collectorName:String(input.collectorName),
         }).then(res=>res.data)
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        sendRequest().then(()=>history("/supplies"));

    };
    const handleChange=(e)=>{
        setInputs((prevState)=>({
            ...prevState,
            [e.target.name]:e.target.value
          }))
    };
   
    return  <div>
        {input && (
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
        marginTop={10}>
        <Typography variant='h4' align='center'>Update Supplies</Typography>
        <FormLabel>Supplier Name</FormLabel>
            <TextField name="name" variant="outlined"  value={input.name} onChange={handleChange} fullWidth  /><br/>
            <FormLabel>Weight</FormLabel>
            <TextField name="weight" type="number" variant="outlined"  value={input.weight} onChange={handleChange} fullWidth /><br/>
            <FormLabel>Payment</FormLabel>
            <TextField name="payment" variant="outlined" value={input.payment} onChange={handleChange} fullWidth /><br/>
            <FormLabel>Collector Name</FormLabel>
            <TextField name="collectorName" variant="outlined"  value={input.collectorName} onChange={handleChange} fullWidth/><br/>
            <Button variant="contained"   size="medium" type="submit"  fullWidth >Update</Button><br/>
            <Button  variant="contained" color="secondary" size="medium"  LinkComponent={NavLink} to="/" fullWidth>Back</Button>
        </Box>
      </form>)}
      
    </div>;
  
}

export default SuppliesDetail