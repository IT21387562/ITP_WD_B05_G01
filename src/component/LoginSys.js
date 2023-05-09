import React, { useState } from 'react';
import {TextField,Button,Typography,FormLabel} from '@mui/material';
import {Box} from '@mui/system';
import axios from 'axios';
import { useNavigate,NavLink} from 'react-router-dom';
import SupplierImage from './images/supplier.png'
import SupplierManagerImage from './images/supplierManager.png'

const LoginSys = () =>{
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')
  const history=useNavigate()

 
   
  

  //supplier Manager login popup
  const[SupplierManagerLoginpopup,setSupplierManagerLoginpopup]=useState(false);
  const handleSupplierManagerLoginpopup=()=>{
    setSupplierManagerLoginpopup(!SupplierManagerLoginpopup)
  }
  
 
  const handleSupplierManagerLoginpopupclose=()=>{
    setSupplierManagerLoginpopup(false);
  }
  
  //supplier login popup
  const[SupplierLoginPopup,setSupplierLoginPopup]=useState(false);
  const handleSupplierLoginPopup=()=>{
    setSupplierLoginPopup(!SupplierLoginPopup)
  }
 
 
  const handleSupplierLoginPopupclose=()=>{
    setSupplierLoginPopup(false);
  }
 

  //loginfunction
  const sendLoginRequest=async(e)=>{
   
    e.preventDefault()
    try{
        await axios.post("http://localhost:5000/supplierManager/registerSupplierManager/login",{
          email,password
        })
        .then(res=>{
          console.log('jaebal')
          if(res.data=="SMExist"){
            console.log('jaebal')
            history("/")
          }else if(res.data=="DoesNotExist"){
            alert("user Not registered")
          }
        })
    }catch(e){
      console.log(e)
    }

  }

  const handleSubmit=(e)=>{
    e.preventDefault()

  }


        return(
          <div>
            <div className='loginPageMidddle'>
            <Box
                display="flex"
                flexDirection="column"
                justifyContent={"center"}
                maxWidth={500}
                height={415}
                alignContent={"center"}
                alignSelf="center"
                marginLeft={"auto"}
                marginRight={"auto"}
                marginTop={5}
                border={2}>
               
                    
                  <img  src={SupplierImage}  alt="suppmgr" className='loginPictureS'  />
                  <h1>Login As A Supplier</h1>
                  <Button variant="contained"   size="medium" type="submit" onClick={handleSupplierLoginPopup} fullWidth >Login as Supplier</Button><br/>
                   
                </Box>
                <Box
                display="flex"
                flexDirection="column"
                justifyContent={"center"}
                maxWidth={500}
                height={415}
                alignContent={"center"}
                alignSelf="center"
                marginLeft={"auto"}
                marginRight={"auto"}
                marginTop={5}
                border={2}>
               
                    
                  <img  src={SupplierManagerImage}  alt="suppmgr" className='loginPictureSM'  />
                  <h1>Login As A Supplier Manager </h1>
                  <Button variant="contained"   size="medium" type="submit" onClick={handleSupplierManagerLoginpopup} fullWidth >Login </Button><br/>
                  <Button variant="contained"   size="medium" type="submit" LinkComponent={NavLink} to="/signup" fullWidth >Sign up</Button><br/>
                   
                </Box>
                </div>

          
          {SupplierLoginPopup?
            <div className="main">
              <div className='SupplierLoginPopup'>
                <div className='SupplierLoginPopupbtn'>
                <div className='lpopheading'><FormLabel >LOGIN </FormLabel></div>
                  <div>
                  <Button variant="contained" color="error" size='medium'className='closebtn'  onClick={handleSupplierLoginPopupclose}>X</Button>
                  </div>
                </div>
              <form >
                <Box
                display="flex"
                flexDirection="column"
                justifyContent={"center"}
                maxWidth={300}
                alignContent={"center"}
                alignSelf="center"
                marginLeft={"auto"}
                marginRight={"auto"}
                marginTop={5}
                borderRadius={5}>
               
                    
                    <FormLabel>Email</FormLabel>
                    <TextField type="email" variant="outlined"  fullWidth  /><br/>
                    <FormLabel>Password</FormLabel>
                    <TextField type="password" varaiant="outlined"  fullWidth  /><br/>
                  
                    <Button variant="contained"   size="medium" type="submit" LinkComponent={NavLink} to="/supplierHome"  fullWidth >Login</Button><br/>
                   
                </Box>
              </form> 
              </div>
            </div>:""}

            
            {SupplierManagerLoginpopup?
              <div className="main">
                <div className='SupplierManagerLoginpopup'>
                <div className='SupplierManagerLoginpopupbtn'>
                <div className='lpopheading'><FormLabel >LOGIN</FormLabel></div>
                    
                    <div>
                    <Button variant="contained" color="error" size='small' className='closebtn' onClick={handleSupplierManagerLoginpopupclose}>X</Button>
                    </div>
                    </div> 
                <form >
                  <Box
                  display="flex"
                  flexDirection="column"
                  justifyContent={"center"}
                  maxWidth={300}
                  alignContent={"center"}
                  alignSelf="center"
                  marginLeft={"auto"}
                  marginRight={"auto"}
                  marginTop={5}>
                 
                      
                      <FormLabel>Email</FormLabel>
                      <TextField type="email" variant="outlined"  fullWidth  /><br/>
                      <FormLabel>Password</FormLabel>
                      <TextField type="password" varaiant="outlined"  fullWidth  /><br/>
                    
                      <Button variant="contained"   size="medium" type="submit" LinkComponent={NavLink} to="/Home" fullWidth >Login</Button><br/>
                      <Button variant="contained"   size="medium" type="submit"  LinkComponent={NavLink} to="/signup" fullWidth >Sign up</Button><br/>
                     
                  </Box>
                </form> 
                </div>
              </div>:""}
             
              </div>
        )
  }

export default LoginSys