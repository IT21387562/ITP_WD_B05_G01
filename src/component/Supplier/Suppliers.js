import React, { useEffect, useState } from 'react';
import axios from 'axios';
import "../../App.css";
import Supplier from '../Supplier/Supplier';
import { NavLink } from 'react-router-dom';
import { Button } from '@mui/material';
import Search from '../images/search.png'
const URL="http://localhost:5000/suppliers/Allsuppliers";

const fetchHandler=async()=>{
  return await axios.get(URL).then((res)=>res.data)
}
const Suppliers = () => {
  const[suppliers,setSuppliers]=useState();
  const [searchTerm,setSearchTerm]=useState('');
  useEffect(()=>{
   fetchHandler().then(data=>setSuppliers(data.suppliers));
  }, []);

  console.log(suppliers);
  return (
    <div>
      <div className='suppliersHeading'>
        <div className='sSearch'>
        <input type='text' placeholder='search' className='searchBar'  onChange={(e)=>{setSearchTerm(e.target.value)}}></input>
        <img className='searchimg' src={Search} alt='search'/>
        </div>
        <div className='sHeading'>
        <h1>Suppliers</h1>
        </div>
        
        </div>
      <table className='supplierTable'>
            <tr>
                
                <th>Name</th>
                <th>Threshold</th>
                <th>Email</th>
                <th>Contact</th>
                <th>Adress line 1</th>
                <th>Adress line 2</th>
                <th>Adress line 3</th>
                <th>Date Registered</th>
                <th>Update</th>
                <th>Delete</th>
            </tr>
            </table>
      {suppliers && suppliers.filter((suppliers)=>
      {
        if(searchTerm==="")
        {
          return suppliers;

        }
        else if(suppliers.name.toLowerCase().includes(searchTerm.toLowerCase())){
          return suppliers;
        }

      }).map((supplier,i)=>(
        <div key={i}>
          <Supplier supplier={supplier}/>
        </div>
      ))}  
       <div className='btn'>
        <Button  variant="contained" color="secondary" size="medium"  LinkComponent={NavLink} to="/Home" >Back</Button>
      </div>
    </div>
  );
};

export default Suppliers
