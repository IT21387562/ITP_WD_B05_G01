import React, {useState} from 'react';
import supplier from './images/supplier.png';
import update from './images/update.png'
import reports from './images/reports.png';
import {Container,Button,Typography,FormLabel,TextField} from '@mui/material';
import { NavLink,useNavigate } from 'react-router-dom';
import {Box} from '@mui/system';


const SupplierHome = () => {

   
    const[updateAccount,setupdateAccount]=useState(false);
    
     
    const handleupdatepopup=()=>{
        setupdateAccount(!updateAccount)
    }
    
   
    const handleupdateclose=()=>{
    setupdateAccount(false);
    }
    

    const history=useNavigate();

    const [id,setId]=useState('');
        const handleSubmit=(e)=>{
            e.preventDefault();
            console.log(id);
            history(`/supplierupdateDetail/Supplier5`);
        };
   
   
   
    return(
       
        <Container className='homeSpace'>
        <div >
          
      
        <h1>Welcome Supplier </h1>
        <img  src={supplier}  alt="supplier" className='mainPicture'  />
        <div className='logout' >
        <Button  variant="outlined"  LinkComponent={NavLink} to="/" >Log Out</Button>
        </div>
        <div className='Supplierhomespace'>

            <img  src={update}  className='iconImages' alt="update"  /> 
            <Button className='homespacebtn' variant="outlined" onClick={handleSubmit}  >Update Account</Button>        
            <img  src={reports}  className='iconImages' alt="reports"  />           
            <Button className='homespacebtn' variant="outlined" LinkComponent={NavLink} to="/suppliesBySupplier"   >View Reports</Button>      

           {updateAccount?
            <div className="mainSupplier">
            <div className='otherpopup'>              
            <div className='reportpopupbtn'>
                <h3>Enter Name</h3>
                <Button variant="contained" color="error" size='small' className='popclosebtn' onClick={handleupdateclose}>X</Button>
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
                marginTop={0.05}
                >         
            <TextField id="id" name="id" value={id} onChange={(e)=>setId(e.target.value)} variant="outlined"  fullWidth  /><br/>        
            <Button variant="contained"   size="medium" type="submit" onClick={handleSubmit} fullWidth >Get Details</Button><br/>                                
            </Box>   
            </div>
          </div>:""}
                  
        </div>
        </div>
        </Container>

  );
}

export default SupplierHome