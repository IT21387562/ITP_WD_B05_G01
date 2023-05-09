import React, { useEffect, useState } from 'react';
import axios from 'axios';
import DailySupplyReport from './DailySupplyReport';
import { NavLink } from 'react-router-dom';
import { Button } from '@mui/material';
import Search from '../../images/search.png'



const URL="http://localhost:5000/supplies/Allsupplies/daily";
const fetchHandler=async()=>{
  return await axios.get(URL).then((res)=>res.data)
}

const DailySupply = () => {
    const [totalsupply,setTotalSupply]  =useState();
    const [searchTerm,setSearchTerm]=useState('');
  
   
    useEffect(()=>{
        fetchHandler().then(data=>setTotalSupply(data))
    },[]);
  
    console.log(totalsupply)

    
      return(
        <div >
        <div className='suppliersHeadingReport'>
          <div className='sHeadingReport'>
          <h1>Daily Supply Reports</h1>
          </div>
          <div className='sSearchReport'>
          <input type='text' placeholder='search' className='searchBar' onChange={(e)=>{setSearchTerm(e.target.value)}}  ></input>
          <img className='searchimg' src={Search} alt='search'/>
          </div>
          
          </div>
        <table className='dailySupplyTable'>
              <tr>
                  
                  <th>Date</th>
                  <th>Total Tea Supplied (Kilograms)</th>
                  
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
              }).map((daily,i)=>(
          <div key={i}>
            <DailySupplyReport daily={daily}/>
          </div>
        ))} 
         <div className='btn'>
          <Button  variant="outlined" color="secondary" size="medium"  LinkComponent={NavLink} to="/Home" >Back</Button>
        </div>
      </div>
      );
      

}

export default DailySupply