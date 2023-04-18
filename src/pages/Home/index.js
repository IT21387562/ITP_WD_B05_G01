import React, { useEffect, useState } from "react";
import Button from "../../components/Button";
// import VehicleForm from "./VehicleForm";
import { useDispatch } from "react-redux";
import { DeleteVehicle, GetAllVehicles } from "../../apicalls/vehicles";
import { Col, Row, Table, message } from "antd";
import moment from "moment";
import { HideLoading, ShowLoading } from "../../redux/loadersSlice";
import { useNavigate } from "react-router-dom";

function Home() {

  const [vehicles, setVehicles] = React.useState([]);

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const getVehicles = async () => {
    try {
      dispatch(ShowLoading());
      const response = await GetAllVehicles();
      dispatch(HideLoading());
      if (response.success) {
        setVehicles(response.data);
      } else {
        message.error(response.message);
      }
     
    } catch (error) {
      dispatch(HideLoading());
      message.error(error.message);
    }
  };

  useEffect(() => {
    getVehicles();
  }, []);

  return (
    <><div className="font-bold text-xl">
      <h1  className="font-bold text-3xl p-2 gap-2">Welcome!!</h1> 
      <hr className="gap-1"/>
      <h1 className="font-bold text-2xl p-2 gap-2"> Vehicle Details</h1>

    </div><div className="mt-2">
        <Row
          gutter={[16, 16]}>
          {vehicles.map((vehicle) => {
            return (
              <Col
                xs={24}
                sm={24}
                md={12}
                lg={6}
                xl={6}

                key={vehicle._id}
                onClick={()=> navigate(`vehicle/${vehicle._id}`)}
              >
                <div className="rounded bg-form p-2 shadow flex flex-col gap-1">
                  <img src={vehicle.image} height="200px" />
                  <h1 className="text-md font-bold mt-2"> {vehicle.model} </h1>
                </div>
              </Col>);
          })}
        </Row>

      </div></>
  )
}

export default Home