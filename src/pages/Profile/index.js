import React from "react";
import { Tabs } from "antd";
import Vehicles from "./Vehicles";
import Places from "./Places";
import Equipments from "./Equipments";
import Users from "./Users";
import Reports from "./Reports";
import History from "../History";
import { useSelector } from "react-redux";
import BasicDtails from "./BasicDeails";

const TabPane = Tabs.TabPane;

function profile() {
  const {user} = useSelector((state) => state.users);
  const role = user.role;

  return (
    <div>
      <Tabs defaultActiveKey="1">
        {role !== "driver" && (
          <TabPane tab="Vehicles" key="1">
            <Vehicles />
          </TabPane>
        )}

        {role !== "driver" && (
          <TabPane tab="Drivers" key="2">
            <Users role="driver" />
          </TabPane>
        )}

        {role === "manager" && (
          <TabPane tab="Managers" key="3">
            <Users role="manager" />
          </TabPane>
        )}

        {role === "manager" && (
          <TabPane tab="Places" key="4">
            <Places />
          </TabPane>
        )}

        {role === "manager" && (
          <TabPane tab="Equipments" key="5">
            <Equipments />
          </TabPane>
        )}

        {role === "manager" && (
          <TabPane tab="Reports" key="6">
            <Reports />
          </TabPane>
        )}

          <TabPane tab=" General" key="7">
            <BasicDtails />
          </TabPane>

        {role === "driver" && (
          <TabPane tab=" History" key="8">
            <History />
          </TabPane>
        )}
      </Tabs>
    </div>
  );
}

export default profile;
