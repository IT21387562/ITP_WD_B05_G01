import React, { useEffect, useState } from 'react';
import axios from 'axios';
import SuppliesBySupplierDetails from './SuppliesBySupplierDetails';
import { NavLink } from 'react-router-dom';
import { Button } from '@mui/material';
import Search from '../../images/search.png'


const name='Supplier5'
const URL=`http://localhost:5000/supplies/Allsupplies/dailySupplies/find/${name}`;
const fetchHandler=async()=>{
  return await axios.get(URL).then((res)=>res.data)
}

const SuppliesBySupplier = () => {
  const [supplierdaily,setsupplierdaily]  =useState();
  const [searchTerm,setSearchTerm]=useState('');

 
  useEffect(()=>{
      fetchHandler().then(data=>setsupplierdaily(data))
  },[]);

  console.log(supplierdaily)

  
    return(
      <div >
      <div className='suppliersHeadingReport'>
        <div className='sHeadingReport'>
        <h1>Daily Supply Reports</h1>
        </div>
        <div className='sSearchSupplierReport'>
        <input type='text' placeholder='search' className='searchBarSupplier' onChange={(e)=>{setSearchTerm(e.target.value)} }  ></input>
        <img className='searchimg' src={Search} alt='search'/>
        </div>
        
        </div>
      <table className='SupplierSupplyTable'>
            <tr>
                
                <th>Transaction ID</th>
                <th>Tea Supplied (Kilograms)</th>
                <th>Payment </th>
                <th>Date</th>
                <th>Print Receipt</th>
                
            </tr>
            </table>
            {supplierdaily && supplierdaily.filter((supplierdaily)=>
            {
              if(searchTerm==="")
              {
                  return supplierdaily;

              }
              else if(supplierdaily.date.toLowerCase().includes(searchTerm.toLowerCase())){
                  return supplierdaily;
              }
            }).map((supplierdaily,i)=>(
        <div key={i}>
          <SuppliesBySupplierDetails supplierdaily={supplierdaily}/>
        </div>
      ))} 
       <div className='btn'>
        <Button  variant="outlined" color="secondary" size="medium"  LinkComponent={NavLink} to="/supplierHome" >Back</Button>
      </div>
    </div>
    );
  
}

export default SuppliesBySupplier