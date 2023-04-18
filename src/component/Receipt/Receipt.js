import React from 'react'

const Receipt = (props) =>{
   
    const {_id,name,weight,payment,collectorName,date}=props.supply;
    const history=useNavigate();
    const deleteHandler=async()=>{
        await axios
        .delete(`http://localhost:5000/supplies/${_id}`)
        .then((res)=>res.data)
        .then(()=>history("/"))
        .then(()=>history("/supplies"));
    }
  return (
    <div>
        <table className='supplierTable'>
            
            <tr>
                <td>{name}</td>
                <td>{weight}</td>
                <td>{payment}</td>
                <td>{collectorName}</td>
                <td>{date}</td>
                <td><Button LinkComponent={Link} to={`/supplies/${_id}`}>Update</Button></td>
                <td><Button onClick={deleteHandler}>Delete</Button></td>
            </tr>
        </table>
    </div>
    
  )
}

export default Receipt