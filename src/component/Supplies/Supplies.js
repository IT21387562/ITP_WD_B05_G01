import React, { useEffect, useState } from 'react';
import axios from 'axios';
import "../../App.css";
import Supply from '../Supplies/Supply';
import { NavLink } from 'react-router-dom';
import { Button } from '@mui/material';
import Search from '../images/search.png'
const URL="http://localhost:5000/supplies";



const fetchHandler=async()=>{
    return await axios.get(URL).then((res)=>res.data)
  }

const Supplies = () =>  {
    const [searchTerm,setSearchTerm]=useState('');
    const[supplies,setSupplies]=useState();
    useEffect(()=>{
     fetchHandler().then(data=>setSupplies(data.supplies));
    }, []);

    
  
    console.log(supplies);
    return (
      <div>
        <div className='suppliersHeading'>
        <div className='sSearch'>
        <input type='text' placeholder='search' className='searchBar' onChange={(e)=>{setSearchTerm(e.target.value)}}></input>
        <img className='searchimg' src={Search} alt='search'/>
        </div>
        <div className='sHeading'>
        <h1>Supplies</h1>
        </div>
        
        </div>
        <table className='supplierTable'>
              <tr>
                  
                  <th>Supplier Name</th>
                  <th>Weight</th>
                  <th>Payment</th>
                  <th>Collector Name</th>
                  <th>Date Added</th>
                  <th>Update</th>
                  <th>Delete</th>
              </tr>
              </table>
        {supplies && supplies.filter((supplies)=>
        {
          if(searchTerm==="")
          {
            return supplies;
          }else if(supplies.name.toLowerCase().includes(searchTerm.toLowerCase())){
              return supplies;
          }
        }).map((supply,i)=>(
          <div key={i}>
            <Supply supply={supply}/>
          </div>
        ))}  
        <div className='btn'>
         <Button  variant="contained" className='button'  color="secondary" size="medium" LinkComponent={NavLink} to="/">Back</Button>
         </div>
      </div>
    );
  }
export default Supplies