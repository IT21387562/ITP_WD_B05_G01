import { Button } from '@mui/material';
import axios from 'axios';
import React from 'react'
import { Link, useNavigate } from 'react-router-dom';

const Supplier = (props) => {
   
    const {_id,name,threshold,email,contact,adressline1,adressline2,adressline3,date}=props.supplier;
    const history=useNavigate();
    const deleteHandler=async()=>{
        await axios
        .delete(`http://localhost:5000/suppliers/${_id}`)
        .then((res)=>res.data)
        .then(()=>history("/"))
        .then(()=>history("/suppliers"));
    }
  return (
    <div>
        <table className='supplierTable'>
            
            <tr>
                <td>{name}</td>
                <td>{threshold}</td>
                <td>{email}</td>
                <td>{contact}</td>
                <td>{adressline1}</td>
                <td>{adressline2}</td>
                <td>{adressline3}</td>
                <td>{date}</td>
                <td><Button LinkComponent={Link} to={`/suppliers/${_id}`}>Update</Button></td>
                <td><Button onClick={deleteHandler}>Delete</Button></td>
            </tr>
        </table>
    </div>
    
  )
}

export default Supplier