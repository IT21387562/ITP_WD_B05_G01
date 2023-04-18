import React, { useState } from 'react';
import {TextField,Button,Typography,FormLabel} from '@mui/material';
import {Box} from '@mui/system';
import { useNavigate,NavLink} from 'react-router-dom';


const SupplierReceipt = () => {
    const history=useNavigate();
  
    const [id,setId]=useState('');
      const handleSubmit=(e)=>{
          e.preventDefault();
          console.log(id);
          history(`/receiptDetails/${id}`);
      };
        
    return (
      <div>
        <form >
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
          <Typography variant='h4' align='center'>View Receipt</Typography>
              <FormLabel>Enter Transaction ID</FormLabel>
              <TextField id="id" name="id" value={id} onChange={(e)=>setId(e.target.value)} variant="outlined"  fullWidth  /><br/>
           
              <Button variant="contained"   size="medium" type="submit" onClick={handleSubmit} fullWidth >Get Receipt</Button><br/>
              <Button  variant="contained" color="secondary" size="medium"  LinkComponent={NavLink} to="/supplierHome" fullWidth>Back</Button>
          </Box>
        </form>
        </div>
    )
  }

export default SupplierReceipt