import React from 'react'

const RegistrationReportDetails = (props) => {
const {_id,name,threshold,email,contact,date}=props.dailysupplier;
return (
  <div>
        <table className='dailySupplierTable'>
            
            <tr>
                <td>{_id}</td>
                <td>{name}</td>
                <td>{threshold}</td>
                <td>{email}</td>
                <td>{contact}</td>
                <td>{date}</td>
                
            </tr>
        </table>
    </div>
  
)
}

export default RegistrationReportDetails