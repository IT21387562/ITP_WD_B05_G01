import { Modal, Table, message } from 'antd'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { HideLoading, ShowLoading } from '../../../redux/loadersSlice';
import { GetIssues, ReturnVehicle } from '../../../apicalls/issues';
import moment from "moment";
import Button from "../../../components/Button";
//import IssueForm from "./IssueForm";

function Issues({
    open = false,
    setOpen,
    selectedVehicle,
}) {

  const [issues, setIssues] = React.useState([]);

  const dispatch = useDispatch();

  const getIssues = async () => {
    try {
      dispatch(ShowLoading());
      const response = await GetIssues({
        vehicle : selectedVehicle._id,
      });
      dispatch(HideLoading());
      if(response.success){
        setIssues(response.data);
      }
    } catch (error) {
      dispatch(HideLoading());
      message.error(error.message);
    }
  }

  useEffect(()=>{
    getIssues();
  },[]);

  const onReturnHandler = async (issue) => {
    try {
      issue.returnedDate = new Date();
      issue.vehicle = issue.vehicle._id;
      dispatch(ShowLoading());
      const response = await ReturnVehicle(issue);
      dispatch(HideLoading());
      if (response.success) {
        message.success(response.message);
        getIssues();
      }
       else {
        message.error(response.message);
      }
    } catch (error) {
      dispatch(HideLoading());
      message.error(error.message);
    }
  };

  const columns = [
    {
      title: "Id",
      dataIndex: "_id",
    },
    {
      title: "Driver",
      dataIndex: "user",
      // aaaa why i cant get name to the isuues formmmmm
      render:(user) => user?.name,
    },
    {
      title: "Issue Date",
      dataIndex: "issueDate",
      render:(issueDate) => moment(issueDate).format("DD-MM-YYYY"),
    },
    {
      title: "Return Date",
      dataIndex: "returnDate",
      render:(returnDate) => moment(returnDate).format("DD-MM-YYYY"),
    },
    {
      title: "Returned On",
      dataIndex:"returnedDate",
      render : (returnedDate) => {
        if(returnedDate){
          return moment(returnedDate).format("DD-MM-YYYY");
        }else{
          return "Not retured yet"
        }
      }
    },
    {
      title: "Action",
      dataIndex:"action",
      render : (action, record) =>{
        return(
          <Button 
            title="Return Vehicle"
            onClick ={()=> onReturnHandler(record)}
            variant='outlined'

          />
        )
      }

    }
  ]

  return (
    <Modal
        title = ""
        open = {open}
        onCancel={()=> setOpen(false)}
        footer={null}
        width={1400}
        >
          <h1 className="text-xl mt-1 mb-1 text-primary font-bold text-center "> 
            ISSUES OF THIS VEHICLE
          </h1>
        <Table
          columns={columns}
          dataSource={issues}
        />
    </Modal>
  );
}

export default Issues;