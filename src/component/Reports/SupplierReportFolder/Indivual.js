import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Report from '../SupplierReportFolder/SupplierReports';
import { NavLink } from 'react-router-dom';
import { Button } from '@mui/material';
import Search from '../../images/search.png'



const URL="http://localhost:5000/supplies/Allsupplies/suppliesTotal/Supplier1";
const fetchHandler=async()=>{
  return await axios.get(URL).then((res)=>res.data)
}


  const Indivual = () => {
  const [totalsupply,setTotalSupply]  =useState();
  const [searchTerm,setSearchTerm]=useState('');

 
  useEffect(()=>{
      fetchHandler().then(data=>setTotalSupply(data))
  },[]);

  console.log(totalsupply)
    return (
      <div>
      <div className='suppliersHeadingReport'>
        
        <div className='sHeadingReport'>
        <h1>Supplies Report</h1>
        </div>
        <div className='sSearchReport'>
        <input type='text' placeholder='search' className='searchBar' onChange={(e)=>{setSearchTerm(e.target.value)}}  ></input>
        <img className='searchimg' src={Search} alt='search'/>
        </div>
        
        </div>
      <table className='dailySupplyTable'>
            <tr>
                
                <th>Name</th>
                <th>Total Tea Supplied (Kilograms)</th>
                <th>Total Payments Made</th>
                
            </tr>
            </table>
            {totalsupply && totalsupply.filter((totalsupply)=>
            {
              if(searchTerm==="")
              {
                  return totalsupply;

              }
              else if(totalsupply._id.toLowerCase().includes(searchTerm.toLowerCase())){
                  return totalsupply;
              }
            }).map((report,i)=>(
        <div key={i}>
          <Report report={report}/>
        </div>
      ))} 
       <div className='btn'>
        <Button  variant="contained" color="secondary" size="medium"  LinkComponent={NavLink} to="/Home" >Back</Button>
      </div>
    </div>
    );
}

Indivual.propTypes = {}

export default Indivual