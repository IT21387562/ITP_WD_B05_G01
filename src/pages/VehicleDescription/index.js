import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import{useParams} from "react-router-dom";
import { HideLoading, ShowLoading } from '../../redux/loadersSlice';
import { GetVehicleById } from '../../apicalls/vehicles';
import { Col, Row, message } from 'antd';

function VehicleDescription() {
    const [vehicleData, setVehicleData] =  React.useState({});
    const dispatch = useDispatch();
    const { id } = useParams();

    const getVehicle = async()=> {
        try {
            dispatch(ShowLoading());
            const response = await GetVehicleById(id);
            dispatch(HideLoading());
            if(response.success){
                setVehicleData(response.data);
            }else{
                message.error(response.error);
            }

        } catch (error) {
            dispatch(HideLoading());
            message.error(error.message);
        }
    }

    useEffect(()=>{
        getVehicle();
    },[])


  return (
   vehicleData && <div>
        <Row gutter={[16,16]} align='middle' justify='center' >
            <Col xs={24} sm={24} md={12} lg={12} xl={12} className='flex flex-col gap-2'>
                <h1 className='text-xl font-bold text-secondary uppercase mt-2'>
                   Model : {vehicleData?.model}
                </h1>
                <hr/>
                <div className='flex justify-center'>
                <img src={vehicleData.image} alt=''
                height={400} width='auto'/> </div>
                <div className='flex justify-between'>
                    <h1 className='text-md font-bold' >Year</h1>
                    <h1 className='text-md font-bold'>{vehicleData?.year}</h1>
                </div>
                <div className='flex justify-between'>
                    <h1 className='text-md font-bold' >License Plate Number</h1>
                    <h1 className='text-md font-bold'>{vehicleData?.license_plate_number}</h1>
                </div>
                <div className='flex justify-between'>
                    <h1 className='text-md font-bold' >VIN Number</h1>
                    <h1 className='text-md font-bold'>{vehicleData?.VIN_number}</h1>
                </div>
                <p className='text-md font-bold'> Maintanance History :   {vehicleData?.maintainance_history}</p>
            </Col>
        </Row>
    </div>
  )
}

export default VehicleDescription