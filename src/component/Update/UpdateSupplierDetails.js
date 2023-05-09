import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams,NavLink } from 'react-router-dom';
import {TextField,Button,Typography,FormLabel} from '@mui/material';
import {Box} from '@mui/system';

const UpdateSupplierDetails = () => {
    const [inputs,setInputs]=useState({});
    const id=useParams().id;
    const history=useNavigate();
    useEffect(()=>{
        const fetchHandler=async()=>{
            await axios
            .get(`http://localhost:5000/suppliers/Allsuppliers/search/${id}`)
            .then((res)=>res.data)
            .then(data=>setInputs(data.supplier));
        };
        fetchHandler()
    },[id]);

    const sendRequest=async()=>{
         await axios.put(`http://localhost:5000/suppliers/Allsuppliers/search/${id}`,{
            name:String(inputs.name),
            email:String(inputs.email),
            contact:String(inputs.contact),
            adressline1:String(inputs.adressline1),
            adressline2:String(inputs.adressline2),
            adressline3:String(inputs.adressline3),
         }).then(res=>res.data)
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        sendRequest().then(()=>history("/supplierHome"));

    };
    const handleChange=(e)=>{
        setInputs((prevState)=>({
            ...prevState,
            [e.target.name]:e.target.value
          }))
    };
   
    return  <div>
        {inputs && (
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
        <Typography variant='h4' align='center'>Update Supplier</Typography>
            <FormLabel>Name</FormLabel>
            <TextField name="name" variant="outlined"  value={inputs.name} onChange={handleChange} fullWidth  /><br/>
            <FormLabel>Email</FormLabel>
            <TextField name="email" variant="outlined"  value={inputs.email} onChange={handleChange} fullWidth /><br/>
            <FormLabel>Contact</FormLabel>
            <TextField name="contact" variant="outlined"  value={inputs.contact} onChange={handleChange} fullWidth/><br/>
            <FormLabel>Address Line 1</FormLabel>
            <TextField name="adressline1" variant="outlined"  value={inputs.adressline1} onChange={handleChange} fullWidth /><br/>
            <FormLabel>Address Line 2</FormLabel>
            <TextField name="adressline2" variant="outlined"  value={inputs.adressline2} onChange={handleChange} fullWidth /><br/>
            <FormLabel>Address Line 3</FormLabel>
            <TextField name="adressline3" variant="outlined"  value={inputs.adressline3} onChange={handleChange} fullWidth /><br/>
            <Button variant="contained"   size="medium" type="submit"  fullWidth >Update</Button><br/>
            <Button  variant="contained" color="secondary" size="medium"  LinkComponent={NavLink} to="/supplierHome" fullWidth>Back</Button>
        </Box>
      </form>)}
    </div>;
}

export default UpdateSupplierDetails