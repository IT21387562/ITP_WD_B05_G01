import React, { useEffect, useState } from "react";
import Button from "../../../components/Button";
import EquipmentForm from "./EquipmentForm";
import { useDispatch } from "react-redux";
import { DeleteEquipment, GetAllEquipments } from "../../../apicalls/equipments";
import { Table, message } from "antd";
import { HideLoading, ShowLoading } from "../../../redux/loadersSlice";
import moment from "moment";

function Equipments() {
  const [formType, setFormType] = useState('add');
  const [selectedEquipment, setSelectedEquipment] = useState(null);
  const [openEquipmentForm, setOpenEquipmentForm] = React.useState(false);
  const [equipments, setEquipments] = React.useState([]);
  const dispatch = useDispatch();

  const getEquipments = async () => {
    try {
      dispatch(ShowLoading());
      const response = await GetAllEquipments();
      dispatch(HideLoading());
      if (response.success) {
        setEquipments(response.data);
      } else {
        message.error(response.message);
      }
     
    } catch (error) {
      dispatch(HideLoading());
      message.error(error.message);
    }
  };


  useEffect(() => {
    getEquipments();
  }, []);


  const deleteEquipment = async(id) => {
    try {
      dispatch(ShowLoading());
      const response = await DeleteEquipment(id);
      dispatch(HideLoading());
      if(response.success){
        message.success(response.message);
        getEquipments();
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
      title: "Equipments",
      dataIndex: "image",
      render: (image) => (
        <img src={image} alt="vehicle" width="60" height="60" />
      ),
    },
    {
      title: "Name",
      dataIndex: "type",
    },
    {
      title: "Purchase Date",
      dataIndex: "purchase_date",
    },
    {
      title: "Warrenty Information",
      dataIndex: "warrenty",
    },
    {
      title: "Availability",
      dataIndex: "availability",
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
              setSelectedEquipment(record);
              setOpenEquipmentForm(true);
            }}
          ></i>
          <i className="ri-delete-bin-6-line"
            onClick={()=> deleteEquipment(record._id)}
          ></i>
        </div>
      ),
    },
  ];

  return (
    <div>
      <div className="flex justify-end">
        <Button title="Add Equipment" onClick={() => 
          {setFormType("add");
          setSelectedEquipment(null);
          setOpenEquipmentForm(true);
          } }/>
      </div>

      <Table columns = {columns} dataSource={equipments} className="mt-1"/>

      {openEquipmentForm && (
        <EquipmentForm 
          open={openEquipmentForm} 
          setOpen={setOpenEquipmentForm} 
          reloadEquipments={getEquipments}
          formType = {formType}
          selectedEquipment ={selectedEquipment}
          setSelectedEquipment={setSelectedEquipment}
          />
      )}
    </div>
  );
}

export default Equipments;