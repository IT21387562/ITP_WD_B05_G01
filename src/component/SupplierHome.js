import React from 'react';
import supplier from './images/supplier.png';
import update from './images/update.png'
import reports from './images/reports.png';
import printreceipt from './images/printreceipt.png'
import {Container,Button} from '@mui/material';
import { NavLink } from 'react-router-dom';

const SupplierHome = () => {
   
    return(
       
        <Container className='homeSpace'>

        <div >
      
        <h1>Welcome Supplier </h1>
        <img  src={supplier}  alt="supplier" className='mainPicture'  />

        <div className='homespace'>

            <img  src={update}  className='iconImages' alt="update"  /> 
            <Button className='homespacebtn' variant="outlined" LinkComponent={NavLink} to="/supplierUpdate" >Update Account</Button>        
            <img  src={reports}  className='iconImages' alt="reports"  />           
            <Button className='homespacebtn' variant="outlined" >View Reports</Button>      
            <img  src= {printreceipt}  className='iconImages' alt= "printreceipt"  /> 
           <Button className='homespacebtn' variant="outlined" LinkComponent={NavLink} to="/supplierReceipt" >Print Receipt</Button>

        </div>
        </div>
        </Container>

  );
}

export default SupplierHome