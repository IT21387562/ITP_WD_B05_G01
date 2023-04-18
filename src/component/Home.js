import React from 'react';
import tealeaf from './images/tealeaf.png';
import supplierManager from './images/supplierManager.png';
import register from './images/register.png';
import addsupply from './images/addsupply.png';
import editsupply from './images/editsupply.png';
import reports from './images/reports.png';
import editsupplier from './images/editsupplier.png';
import {Container,AppBar,Typography,Grow,Grid,Button,Divider} from '@mui/material';
import{NavLink} from 'react-router-dom';
import {Box} from '@mui/system';

const Home = () => {

  
  return(
    
      
     
        <Container className='homeSpace'>
        <Box
        >
        <div >
      
      <h1>Welcome Supplier Manager</h1>
        <img  src={supplierManager}  alt="suppmgr" className='mainPicture'  />

      

        <div className='homespace'>

        <img  src={register}  alt="register" className='iconImages'  /> 
        
        <Button variant="outlined"   className='homespacebtn' LinkComponent={NavLink} to="/add" >Register supplier</Button>   
         
        <img  src={addsupply}   alt="addsupply"  className='iconImages' /> 
        <Button  variant="outlined" className='homespacebtn'LinkComponent={NavLink} to="/addsupplies"  >Add Supply</Button>        
        <img  src= {editsupply}   alt= "editsupply"  className='iconImages' /> 
        <Button  variant="outlined" className='homespacebtn' LinkComponent={NavLink} to="/supplies" >Edit Supply</Button>

        </div>
        <div className='homespace2'>
        <img  src={reports}   alt="reports"  className='iconImages' />           
        <Button  variant="outlined" className='homespacebtn' >View Reports</Button>
        <img  src={editsupplier}   alt="editsupplier"  className='iconImages'/>          
        <Button  variant="outlined" className='homespacebtn'  LinkComponent={NavLink} to="/suppliers" >Edit Supplier</Button>
        </div>
        </div>
        </Box>
        </Container>
      
      

      

  );
}

export default Home