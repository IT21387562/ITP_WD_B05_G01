import React, { useEffect, useState } from "react";
import Button from "../../../components/Button";
import VehicleForm from "./VehicleForm";
import { useDispatch } from "react-redux";
import { DeleteVehicle, GetAllVehicles } from "../../../apicalls/vehicles";
import { Table, message } from "antd";
import { HideLoading, ShowLoading } from "../../../redux/loadersSlice";
import moment from "moment";

//from issues
import IssueForm from "./IssueForm";
import Issues from "./Issues";

function Vehicles() {
  const [formType, setFormType] = useState('add');
  const [selectedVehicle, setSelectedVehicel] = useState(null);
  const [openVehicleForm, setOpenVehicleForm] = React.useState(false);
  const [openIssues, setOpenIssues]= React.useState(false);
  //from issues
  const [openIssuesForm, setOpenIssuesForm] = React.useState(false);
  const [vehicles, setVehicles] = React.useState([]);

  const dispatch = useDispatch();

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


  const deleteVehicle = async(id) => {
    try {
      dispatch(ShowLoading());
      const response = await DeleteVehicle(id);
      dispatch(HideLoading());
      if(response.success){
        message.success(response.message);
        getVehicles();
      }else{
        message.error(response.message);
      }
    } catch (error) {
      dispatch(HideLoading());
      message.error(error.message);
    }
  };
 

  const columns = [
    {
      title: "Vehicles",
      dataIndex: "image",
      render: (image) => (
        <img src={image} alt="vehicle" width="60" height="60" />
      ),
    },
    {
      title: "Model",
      dataIndex: "model",
    },
    {
      title: "Year",
      dataIndex: "year",
    },
    {
      title: "License Plate Number",
      dataIndex: "license_plate_number",
    },
    {
      title: "VIN number",
      dataIndex: "VIN_number",
    },
    {
      title:"Added On",
      dataIndex: "createdAt",
      render : (date) => moment(date).format("DD-MM-YYYY hh:mm A"),
    },
    {
      title:"Action",
      render:(text,record)=>(
        <div className="flex gap-1">
          <i className="ri-edit-line"
            onClick={()=>{
              setFormType("edit");
              setSelectedVehicel(record);
              setOpenVehicleForm(true);
            }}
          ></i>
          <i className="ri-delete-bin-6-line"
            onClick={()=> deleteVehicle(record._id)}
          ></i>

          {/* from issues */}
          <span className="underline"
            onClick = {()=>{
              setOpenIssues(true);
              setSelectedVehicel(record);
            }}
          >
            Issues
          </span>

          <span
            className="underline"
            onClick ={()=>{
              setOpenIssuesForm(true);
              setSelectedVehicel(record);
            }}
          >
            Issue Vehicle
          </span>
          {/* to issues */}
        </div>
      ),
    },
  ];

  return (
    <div>
      <div className="flex justify-end">
        <Button title="Add Vehicle" onClick={() => 
          {setFormType("add");
          setSelectedVehicel(null);
          setOpenVehicleForm(true);
          } }/>
      </div>

      <Table columns = {columns} dataSource={vehicles} className="mt-1"/>

          
      {openVehicleForm && (
        <VehicleForm 
          open={openVehicleForm} 
          setOpen={setOpenVehicleForm} 
          reloadVehicles={getVehicles}
          formType = {formType}
          selectedVehicle ={selectedVehicle}
          setSelectedVehicel={setSelectedVehicel}
          />
      )}

      {/* From Issues */}
      {openIssues && (
        <Issues
          open = {openIssues}
          setOpen={setOpenIssues}
          selectedVehicle={selectedVehicle}
          setSelectedVehicel={setSelectedVehicel}
          />
      )}

      {/* From Issue */}
      {openIssuesForm && (
        <IssueForm
          open = {openIssuesForm}
          setOpen={setOpenIssuesForm}
          selectedVehicle={selectedVehicle}
          setSelectedVehicel={setSelectedVehicel}
          getData = {getVehicles}
          />
      )}
    </div>
  );
}

export default Vehicles;
