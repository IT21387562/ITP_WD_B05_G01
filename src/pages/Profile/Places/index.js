import React, { useEffect, useState } from "react";
import Button from "../../../components/Button";
import PlaceForm from "./PlaceForm";
import { useDispatch } from "react-redux";
import { DeletePlace, GetAllPlaces } from "../../../apicalls/places";
import { Table, message } from "antd";
import { HideLoading, ShowLoading } from "../../../redux/loadersSlice";
import moment from "moment";

function Places() {
  const [formType, setFormType] = useState('add');
  const [selectedPlace, setSelectedPlace] = useState(null);
  const [openPlaceForm, setOpenPlaceForm] = React.useState(false);
  const [places, setPlaces] = React.useState([]);
  const dispatch = useDispatch();

  const getPlaces = async () => {
    try {
      dispatch(ShowLoading());
      const response = await GetAllPlaces();
      dispatch(HideLoading());
      if (response.success) {
        setPlaces(response.data);
      } else {
        message.error(response.message);
      }
     
    } catch (error) {
      dispatch(HideLoading());
      message.error(error.message);
    }
  };


  useEffect(() => {
    getPlaces();
  }, []);


  const deletePlace = async(id) => {
    try {
      dispatch(ShowLoading());
      const response = await DeletePlace(id);
      dispatch(HideLoading());
      if(response.success){
        message.success(response.message);
        getPlaces();
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
      title: "Places",
      dataIndex: "image",
      render: (image) => (
        <img src={image} alt="vehicle" width="60" height="60" />
      ),
    },
    {
      title: "Name",
      dataIndex: "name",
    },
    {
      title: "Owner",
      dataIndex: "owner",
    },
    {
      title: "Telephone",
      dataIndex: "telephone",
    },
    {
      title: "Address",
      dataIndex: "address",
    },
    {
      title:"Distance(KM)",
      dataIndex: "distance"
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
              setSelectedPlace(record);
              setOpenPlaceForm(true);
            }}
          ></i>
          <i className="ri-delete-bin-6-line"
            onClick={()=> deletePlace(record._id)}
          ></i>
        </div>
      ),
    },
  ];

  return (
    <div>
      <div className="flex justify-end">
        <Button title="Add Place" onClick={() => 
          {setFormType("add");
          setSelectedPlace(null);
          setOpenPlaceForm(true);
          } }/>
      </div>

      <Table columns = {columns} dataSource={places} className="mt-1"/>

      {openPlaceForm && (
        <PlaceForm 
          open={openPlaceForm} 
          setOpen={setOpenPlaceForm} 
          reloadPlaces={getPlaces}
          formType = {formType}
          selectedPlace ={selectedPlace}
          setSelectedPlace={setSelectedPlace}
          />
      )}
    </div>
  );
}

export default Places;