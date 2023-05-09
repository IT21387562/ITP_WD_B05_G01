import React, { useEffect, useState } from 'react';
import axios from 'axios';
import RegistrationReportDetails from './RegistrationReportDetails';
import { NavLink } from 'react-router-dom';
import { Button } from '@mui/material';
import Search from '../../images/search.png'
import Suppliers from '../../Supplier/Suppliers';


const date='2023-04-21'
const URL=`http://localhost:5000/suppliers/Allsuppliers/find/${date}`;
const fetchHandler=async()=>{
  return await axios.get(URL).then((res)=>res.data)}




const RegistraionReport = () => {
    const [dailysupplier,setdailysupplier]  =useState();
    const [searchTerm,setSearchTerm]=useState('');
  
   
    useEffect(()=>{
        fetchHandler().then(data=>setdailysupplier(data.supplier))
    },[]);
  
    console.log(dailysupplier)

    
      return (
        <div >
        <div className='suppliersHeadingReport'>
          <div className='sHeadingReport'>
          <h1>Daily Supply Reports</h1>
          </div>
          <div className='sSearchRegisteredReport'>
          <input type='text' placeholder='search' className='searchBarRegsitered' onChange={(e)=>{setSearchTerm(e.target.value)}}  ></input>
          <img className='searchimg' src={Search} alt='search'/>
          </div>
          
          </div>
        <table className='dailySupplierTable'>
              <tr>
                  
                  <th>ID</th>
                  <th>Name</th>
                  <th>Threshold(Kgs)</th>
                  <th>Email</th>
                  <th>Contact</th>
                  <th>Date</th>
                  
              </tr>
              </table>
              {dailysupplier && dailysupplier.filter((dailysupplier)=>
              {
                if(searchTerm==="")
                {
                    return dailysupplier;
  
                }
                else if(dailysupplier.name.toLowerCase().includes(searchTerm.toLowerCase())){
                    return dailysupplier;
                }
              }).map((dailysupplier,i)=>(
          <div key={i}>
            <RegistrationReportDetails dailysupplier={dailysupplier}/>
          </div>
        ))} 
         <div className='btn'>
          <Button  variant="outlined" color="secondary" size="medium"  LinkComponent={NavLink} to="/Home" >Back</Button>
        </div>
      </div>
      );
     

}

export default RegistraionReport