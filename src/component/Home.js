import React, { useState } from 'react';
import supplierManager from './images/supplierManager.png';
import register from './images/register.png';
import addsupply from './images/addsupply.png';
import editsupply from './images/editsupply.png';
import reports from './images/reports.png';
import editsupplier from './images/editsupplier.png';
import {Container,TextField,Button,Typography,FormLabel} from '@mui/material';
import{NavLink,useNavigate,useLocation} from 'react-router-dom';
import {Box} from '@mui/system';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';



const Home = () => {
  const location=useLocation()
  const[reportpopup,setReportPopup]=useState(false);
  const[datepopup,setDatePopup]=useState(false);
  const handlereportpopup=()=>{
    setReportPopup(!reportpopup)
  }
  const handledatepopup=()=>{
    setDatePopup(!datepopup)
  }
 
  const handleclose=()=>{
    setReportPopup(false);
  }
  const handledateclose=()=>{
    setDatePopup(false);
  }
 

  const history=useNavigate();

  const [date,setDate]=useState('');
    const handleDateSubmit=(e)=>{
        e.preventDefault();
        console.log(date);
        history(`/regsitrationReport/${date}`);
    };


  return(
    
      
     
        <Container className='homeSpace'>
        <Box>
        <div >
         
        <h1>Welcome Supplier Manager</h1>
        <img  src={supplierManager}  alt="suppmgr" className='mainPicture'  />
        <div className='logout' >
        <Button  variant="outlined"  LinkComponent={NavLink} to="/" >Log Out</Button>
        </div>
      
        
        
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
        <Button  variant="outlined" className='homespacebtn' onClick={handlereportpopup} >View Reports</Button>       
        <img  src={editsupplier}   alt="editsupplier"  className='iconImages'/>          
        <Button  variant="outlined" className='homespacebtn'  LinkComponent={NavLink} to="/suppliers" >Edit Supplier</Button>
        
        {reportpopup?
          <div className="main">
            <div className='reportpopup'>
              
            <div className='reportpopupbtn'>
                <h3>View Reports</h3>
                <Button variant="contained" color="error" size='small' className='popclosebtn' onClick={handleclose}>X</Button>
            </div>
            <Box
                display="flex"
                flexDirection="column"
                justifyContent={"center"}
                maxWidth={700}
                alignContent={"center"}
                alignSelf="center"
                marginLeft={"auto"}
                marginRight={"auto"}
                >
          
                <Button variant="success"   className='homespacebtn' LinkComponent={NavLink} to="/individual" fullWidth endIcon={<ChevronRightIcon />} >Total Supplies By Suppliers</Button>   
                <Button  variant="success" className='homespacebtn'LinkComponent={NavLink} to="/dailysupply"  fullWidth endIcon={<ChevronRightIcon />}>Supply Report Per Date</Button>        
                <Button  variant="success" className='homespacebtn' onClick={handledatepopup} fullWidth endIcon={<ChevronRightIcon />}>Registered Suppliers By Date</Button>  
                                                  
            </Box>   
            </div>
          </div>:""}


          {datepopup?
          <div className="main">
            <div className='reportpopup'>
              
            <div className='reportpopupbtn'>
                <h3>Enter Date</h3>
                <Button variant="contained" color="error" size='small' className='popclosebtn' onClick={handledateclose}>X</Button>
            </div>
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
             
                  
                  <TextField id="date" name="date"  value={date} onChange={(e)=>setDate(e.target.value)} variant="outlined"  fullWidth  /><br/>
                
                  <Button variant="contained"   size="medium" type="submit" onClick={handleDateSubmit} fullWidth >Get Details</Button><br/>
                 
              </Box>
            </form> 
            </div>
          </div>:""}
        </div>
        </div>
        </Box>
        </Container>
      
      

      

  );
}

export default Home