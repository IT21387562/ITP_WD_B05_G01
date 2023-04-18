import { Form, Modal, message } from 'antd'
import React, { useState } from 'react'
import Button from '../../../components/Button';
import moment from 'moment';
import { useDispatch, useSelector } from 'react-redux';
import { GetUserById } from '../../../apicalls/users';
import { HideLoading, ShowLoading } from '../../../redux/loadersSlice';
import { IssueVehicle } from '../../../apicalls/issues';

function IssueForm({
    open = false,
    setOpen,
    selectedVehicle,
    setSelectedVehicel,
    getData,
}){
    const {user} = useSelector(state => state.users);
    const [validated, setValidated]= React.useState(false);
    const [errorMessage, setErrorMessage] = React.useState(false);
    const [driverData, setDriverData]= useState(null);
    const [driverId, setDriverId] = React.useState('');
    const [returnDate, setReturnDate] = React.useState('');
    const dispatch = useDispatch();

    const validate = async ()=>{
        try {
            dispatch(ShowLoading());
            const response = await GetUserById(driverId);
            if(response.success){
                if(response.data.role !== "driver"){
                    setValidated(true);
                    setErrorMessage("This User is Not a Driver");
                    dispatch(HideLoading());
                    return;
                }else{
                    setDriverData(response.data);
                    setValidated(true);
                    setErrorMessage("");
                }
            }else{
                setValidated(false);
                setErrorMessage(response.message);
            }
            dispatch(HideLoading());
        } catch (error) {
            dispatch(HideLoading());
            setValidated(false);
            setErrorMessage(error.message);
        }
    };

    const onIssue = async () => {
        try {
            dispatch(ShowLoading());
            const response = await IssueVehicle({
                vehicle : selectedVehicle._id,
                driver : driverData._id,
                issueDate : new Date(),
                returnDate,
                issuedBy : user._id,
            });
            dispatch(HideLoading());
            if(response.success){
                message.success(response.message);
                getData();
                setDriverId("");
                setReturnDate("");
                setValidated(false);
                setErrorMessage("");
                setSelectedVehicel(null);
                setOpen(false);
            }else{
                message.error(response.message);
            }
        } catch (error) {
            dispatch(HideLoading());
            message.error(error.message);
        }
    }

  return (
    <Modal
        title=""
        open ={open}
        onCancel={()=>{
            setOpen(false)
        }}
        footer={null}
    >
       <div className='flex flex-col gap-2'>
        <h1 className='text-primary font-bold text-xl'> ISSUE NEW VEHICLE</h1>
       <input type = "text"
            value={driverId}
            onChange={(e)=> setDriverId(e.target.value)}
            placeholder='Driver Id'
        />
        <input type="date"
            value={returnDate}
            onChange={(e)=> setReturnDate(e.target.value)}
            placeholder='Return Date'
            min={moment().format("YYYY-MM-DD")}
        />

        {errorMessage && 
            (<span className='error-message'>
                {errorMessage}
            </span>
        )}

        {validated && <div>
            <h1 className='text-sm'>
                Driver : {driverData.name}
            </h1>
            <h1 className='text-sm'>
                Phone Number : {driverData.phone}
            </h1>
            </div>}

        <div className='flex justify-end gap-2 w-100'>


            <Button title="Cancel" 
                variant='outlined'
                onClick={()=> setOpen(false)}/>

            <Button
                title="Validate"
                disabled={driverId === "" || returnDate === ""}
                onClick={validate}


            /> 

            {validated &&
            <Button title="Issue"
            onClick={onIssue}
            disabled={driverId === "" || returnDate === ""}/>}
        </div>
       </div>
     
    </Modal>
  )
}

export default IssueForm