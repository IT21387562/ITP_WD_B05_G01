import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams,NavLink } from 'react-router-dom';
import {TextField,Button,Typography,FormLabel} from '@mui/material';
import {Box} from '@mui/system';
import html2pdf from 'html2pdf.js';
import tealeaf from '../images/tealeaf.png';

const ReceiptDetails = () => {
    const [inputs,setInputs]=useState({});
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
            name:String(inputs.name),
            weight:String(inputs.weight),
            payment:String(inputs.payment),
            collectorName:String(inputs.collectorName),
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

    const button = document.getElementById('download');

    const generatePDF=()=>{
        const element=document.getElementById('receipt');
        html2pdf().from(element).save();
    }
   
    return  <div id="receipt">
        {inputs && (
        <form onSubmit={handleSubmit} >
        <Box
        className='receipt'
        display="flex"
        flexDirection="column"
        justifyContent={"center"}
        maxWidth={700}
        alignContent={"center"}
        alignSelf="center"
        marginLeft={"auto"}
        marginRight={"auto"}
        marginTop={10}>
            <div className='receiptTop'>
            <div className='receiptTopPic'>
            <img src={tealeaf} className='img'  alt='tealeaf'></img>
            </div>
            <div className='receiptTopName'>
            <Typography>Morawakkorale Tea Producer</Typography>
            <Typography>& Private ltd</Typography>
            </div>
            </div>
            <Typography variant='h4' align='center'>Receipt</Typography>
            <FormLabel>Supplier Name</FormLabel> 
            <TextField name="name"   value={inputs.name} onChange={handleChange} fullWidth  InputProps={{readOnly: true,}} /><br/>
            <FormLabel>Weight</FormLabel>
            <TextField name="weight" type="number"  value={inputs.weight} onChange={handleChange} fullWidth  InputProps={{readOnly: true,}}/><br/>
            <FormLabel>Amount Paid</FormLabel>
            <TextField name="payment"  value={inputs.payment} onChange={handleChange} fullWidth InputProps={{readOnly: true,}} /><br/>
            <FormLabel>Collector Name</FormLabel>
            <TextField name="collectorName"   value={inputs.collectorName} onChange={handleChange} fullWidth InputProps={{ readOnly: true,}}/><br/>
            <FormLabel>Date Supplied</FormLabel>
            <TextField name="date"  value={inputs.date} onChange={handleChange} fullWidth InputProps={{readOnly: true,}}/><br/>

            <div className='receiptBottom'>
            <div className='receiptBottomfeilds'>
            <FormLabel>Supplier Signature</FormLabel>
            <TextField name="SupplierSignature" variant="outlined"  value={inputs.SupplierSignature} onChange={handleChange}  InputProps={{readOnly: true,}}/><br/>
            </div>
            <div className='receiptBottomfeilds'>
            <FormLabel>Finance Manager Signature</FormLabel>
            <TextField name="FinanceManagerSignature" variant="outlined"  value={inputs.FinanceManagerSignature} onChange={handleChange}  InputProps={{readOnly: true,}}/><br/>
            </div>
            <div className='receiptBottomfeilds'>
            <FormLabel>Date collected</FormLabel>
            <TextField name="Datecollected" variant="outlined"  value={inputs.Datecollected} onChange={handleChange}  InputProps={{
    readOnly: true,
  }}/><br/>
            </div>
            </div>
         
        </Box>
        </form>)}
        <div className='receiptBottombtn'>
            <div className='receiptBottombtns'>
        <Button className='receiptBottombtn1'id='download' variant="contained"   size="large" type="submit" onClick={generatePDF}  >Save Receipt</Button><br/>
        </div>
        <div className='receiptBottombtns'>
        <Button  className='receiptBottombtn2' variant="contained" color="secondary" size="large" LinkComponent={NavLink} to="/supplierHome" >Back</Button>
        </div>
        </div>
    </div>;
}

export default ReceiptDetails
