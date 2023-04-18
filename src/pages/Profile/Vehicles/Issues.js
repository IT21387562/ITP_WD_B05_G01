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

  const onReturnHandler = async(issue) => {
    issue.vehicle = issue.vehicle._id;
      try {
        issue.returnDate = new Date();
        dispatch(ShowLoading());
        const response = await ReturnVehicle({
          _id : issue._id,
        });
        dispatch(HideLoading());
        if(response.success){
          setIssues(response.data);
          getIssues();
        }else{
          message.error(response.message);
        }
      } catch (error) {
        dispatch(HideLoading());
        message.error(error.message);
      }
  }

  const columns = [
    {
      title: "Id",
      dataIndex: "_id",
    },
    {
      title: "Driver",
      dataIndex: "user",
      // render:(user) => user.name,
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
    },
    {
      title: "Action",
      dataIndex:"action",
      render : (action, record) =>{
        return(
          <Button 
            title="Process Return"
            onClick ={()=> onReturnHandler(record)}
            variant='outlined'

          />
        )
      }

    }
  ]

  return (
    <Modal
        title = "Issues"
        open = {open}
        onCancel={()=> setOpen(false)}
        footer={null}
        width={1200}
        >
        <Table
          columns={columns}
          dataSource={issues}
        />
    </Modal>
  );
}

export default Issues;