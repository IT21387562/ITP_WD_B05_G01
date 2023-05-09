import React from 'react'

const DailySupplyReport = (props) => {
    const {_id, weight}=props.daily;
return (
  <div>
        <table className='dailySupplyTable'>
            
            <tr>
                <td>{_id}</td>
                <td>{weight}</td>
                
                
            </tr>
        </table>
        <div>
        
        </div>
    </div>
   
  
)
}

export default DailySupplyReport