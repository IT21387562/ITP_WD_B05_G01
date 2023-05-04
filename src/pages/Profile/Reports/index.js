import { Col, message, Row } from "antd";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { GetReports } from "../../../apicalls/reports";
import { HideLoading, ShowLoading } from "../../../redux/loadersSlice";

function Reports() {
  const [reports, setReports] = React.useState(null);

  const dispatch = useDispatch();
  const getReports = async () => {
    try {
      dispatch(ShowLoading());
      const response = await GetReports();
      dispatch(HideLoading());
      if (response.success) {
        setReports(response.data);
      } else {
        message.error(response.message);
      }
    } catch (error) {
      dispatch(HideLoading());
      message.error(error.message);
    }
  };

  useEffect(() => {
    getReports();
  }, []);
  return (
    <div>
      <Row gutter={[16, 16] } align={"middle"} justify={"center"}>
        {/* Vehicles */}
        <Col span={15}>
          <div className="shadow p-2">
            <h1 className="text-secondary text-xl font-bold uppercase">
              Vehicles
            </h1>
            <hr />

            <div className="flex justify-between mt-1">
              <h1 className="text-md">Total Vehicles</h1>
              <h1>{reports?.vehicles?.vehiclesCount}</h1>
            </div>
            {/* <div className="flex justify-between mt-1">
              <h1 className="text-md">Total Copies</h1>
              <h1>{reports?.books?.totalBooksCopiesCount}</h1>
            </div>

            <div className="flex justify-between mt-1">
              <h1 className="text-md">Available Copies</h1>
              <h1>{reports?.books?.availableBooksCopiesCount}</h1>
            </div>

            <div className="flex justify-between mt-1">
              <h1 className="text-md">Issued Copies</h1>
              <h1>{reports?.books?.issuesBooksCopiesCount}</h1>
            </div> */}
          </div>
        </Col>

        {/* Users */}
        <Col span={15}>
          <div className="shadow p-2">
            <h1 className="text-secondary text-xl font-bold uppercase">
              Users
            </h1>
            <hr />

            <div className="flex justify-between mt-1">
              <h1 className="text-md">Total Users</h1>
              <h1>{reports?.users?.usersCount}</h1>
            </div>
            <div className="flex justify-between mt-1">
              <h1 className="text-md">Drivers</h1>
              <h1>{reports?.users?.driversCount}</h1>
            </div>

            <div className="flex justify-between mt-1">
              <h1 className="text-md">Managers</h1>
              <h1>{reports?.users?.managersCount}</h1>
            </div>
          </div>
        </Col>

        {/* Places */}

        <Col span={15}>
          <div className="shadow p-2">
            <h1 className="text-secondary text-xl font-bold uppercase">
              Places
            </h1>
            <hr />

            <div className="flex justify-between mt-1">
              <h1 className="text-md">Total Places</h1>
              <h1>{reports?.places?.placesCount}</h1>
            </div>
          </div>
        </Col>

        {/* Equipments */}

        <Col span={15}>
          <div className="shadow p-2">
            <h1 className="text-secondary text-xl font-bold uppercase">
              Equipments
            </h1>
            <hr />

            <div className="flex justify-between mt-1">
              <h1 className="text-md">Total Equipments</h1>
              <h1>{reports?.equipments?.equipmentsCount}</h1>
            </div>
          </div>
        </Col>

        {/* Issues */}
        <Col span={15}>
          <div className="shadow p-2">
            <h1 className="text-secondary text-xl font-bold uppercase">
              Vehicle Issues
            </h1>
            <hr />

            <div className="flex justify-between mt-1">
              <h1 className="text-md">Total Issues</h1>
              <h1>{reports?.issues?.issuesCount}</h1>
            </div>
            <div className="flex justify-between mt-1">
              <h1 className="text-md">Returned Issues</h1>
              <h1>{reports?.issues?.returnedIssuesCount}</h1>
            </div>

            <div className="flex justify-between mt-1">
              <h1 className="text-md">Pending Issues</h1>
              <h1>{reports?.issues?.pendingIssuesCount}</h1>
            </div>

            {/* <div className="flex justify-between mt-1">
              <h1 className="text-md">Overdue Issues</h1>
              <h1>{reports?.issues?.overdueIssuesCount || 0}</h1>
            </div> */}
          </div>
        </Col>


      </Row>
    </div>
  );
}

export default Reports;