import React from 'react';
import { Link} from 'react-router-dom';
import {Button,} from '@mui/material';
const SuppliesBySupplierDetails = (props) => {
  const {_id, name,weight,payment,date}=props.supplierdaily;
  return (
    <div>
          <table className='SupplierSupplyTable'>
              
              <tr>
                  <td>{_id}</td>
                  <td>{weight}</td>
                  <td>{payment}</td>
                  <td>{date}</td>
                  <td><Button LinkComponent={Link} to={`/receiptDetails/${_id}`}>Print Receipt</Button></td>
                  
                  
              </tr>
          </table>
          <div>
          
          </div>
      </div>
     
    
  )
}

export default SuppliesBySupplierDetails