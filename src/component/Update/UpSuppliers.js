import { Button } from '@mui/material';
import React from 'react'
import { Link, useNavigate } from 'react-router-dom';

const UpdateSupplier = (props) =>  {
    
    const {_id,name,email,contact,adressline1,adressline2,adressline3}=props.supplier;
    return (
    <div>
        <table className='supplierTable'>
            
            <tr>
                <td>{name}</td>
                <td>{email}</td>
                <td>{contact}</td>
                <td>{adressline1}</td>
                <td>{adressline2}</td>
                <td>{adressline3}</td>
                <td><Button LinkComponent={Link} to={`/details/${_id}`}>Update</Button></td>
              
            </tr>
        </table>
    </div>
    
  )
}
export default UpdateSupplier