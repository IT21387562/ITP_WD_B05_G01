import React from 'react'


const SupplierReports = (props) => {
  const {_id, weight, payment}=props.report;
return (
  <div>
        <table className='dailySupplyTable'>
            
            <tr>
                <td>{_id}</td>
                <td>{weight}</td>
                <td>{payment}</td>
                
            </tr>
        </table>
    </div>
  
)
}

SupplierReports.propTypes = {}

export default SupplierReports