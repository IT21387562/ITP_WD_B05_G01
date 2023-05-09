import React, { useState } from 'react'
import {AppBar, Tabs, Toolbar, Typography,Tab} from '@mui/material';
import tealeaf from './images/tealeaf.png';
import{NavLink} from 'react-router-dom';
export const Header = () => {
  const[value,setValue] =useState();
  return (
    <div>
        <AppBar 
        sx={{backgroundColor:"#004d4d"}}
        position="sticky">
          <Toolbar>
            <img className='img' src={tealeaf} alt='tealogo'></img>
          <Typography>Morawakkorale Tea Producer & Private ltd</Typography>
          <Tabs 
          sx={{ml:'auto'}}
          textColor="inherit" 
          indicatorColor="primary" 
          value={value} 
          onChange={(e,val)=>setValue(val)}>
            <Tab LinkComponent={NavLink} to="/" label='About Us'/>
            <Tab LinkComponent={NavLink} to="/" label='Gallery'/>
            <Tab LinkComponent={NavLink} to="/" label='Team'/>
            <Tab label='Product'/>
          </Tabs>
          </Toolbar>
            
        </AppBar>
    </div>
  )
}