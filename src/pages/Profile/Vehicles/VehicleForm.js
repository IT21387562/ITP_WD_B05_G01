import React from "react";
import { Col, Form, message, Modal, Row } from "antd";
import Button from "../../../components/Button";
import { useDispatch, useSelector } from "react-redux";
import { AddVehicle, UpdateVehicle } from "../../../apicalls/vehicles";
import { HideLoading, ShowLoading } from "../../../redux/loadersSlice";

function VehicleForm({ open, setOpen, reloadVehicles , setFormType , formType, selectedVehicle, setSelectedVehicel}) {
  const { user } = useSelector((state) => state.users);
  const dispatch = useDispatch();
  const onFinish = async (values) => {
    try {
      dispatch(ShowLoading());

      values.createdBy = user._id;

      let response = null;
      if(formType == "add"){
        response = await AddVehicle(values);
      }else{
        values._id = selectedVehicle._id;
        response = await UpdateVehicle(values);
      }
      if (response.success) {
        message.success(response.message);
        reloadVehicles();
        setOpen(false);
      } else {
        message.error(response.message);
      }
      dispatch(HideLoading());
    } catch (error) {
      dispatch(HideLoading());
      message.error(error.message);
    }
  };

  return (
    <Modal
      title={formType === "add" ? "Add Vehicle" : "Update Vehicle"}
      open={open}
      onCancel={() => setOpen(false)}
      centered
      width={800}
      footer={null}
    >
      <Form layout="vertical" onFinish={onFinish}
      initialValues={selectedVehicle}
      >
        <Row gutter={20}>
          <Col span={12}>
            <Form.Item
              label="Model"
              name="model"
              rules={[
                {
                  required: true,
                  message: "Please Enter Model of the Vehicle",
                },
              ]}
            >
              <input type="text" />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              label="Year"
              name="year"
              rules={[
                {
                  required: true,
                  message: "Please Enter Year of the Vehicle",
                },
              ]}
            >
              <input type="text" />
            </Form.Item>
          </Col>
          <Col span={24}>
            <Form.Item
              label="Image URL"
              name="image"
              rules={[
                {
                  required: true,
                  message: "Please Enter Image URL of the Vehicle",
                },
              ]}
            >
              <input type="text" />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              label="License Plate Number"
              name="license_plate_number"
              rules={[
                {
                  required: true,
                  message: "Please Enter Lisence Plate Number of the Vehicle",
                },
              ]}
            >
              <input type="text" />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              label="VIN Number"
              name="VIN_number"
              rules={[
                {
                  required: true,
                  message: "Please Enter VIN Number of the Vehicle",
                },
              ]}
            >
              <input type="text" />
            </Form.Item>
          </Col>
          <Col span={24}>
            <Form.Item
              label="Maintainance History"
              name="maintainance_history"
              rules={[
                {
                  required: true,
                  message: "Please Enter Maintanance History of the Vehicle"
                },
              ]}
            >
              <textarea type="text" />
            </Form.Item>
          </Col>

          <Col span={24}>
            <Form.Item
              label="Other"
              name="other"
              rules={[
                {
                  required: true,
                  message: "Please Enter Other Details of the Vehicle"
                },
              ]}
            >
              <textarea type="text" />
            </Form.Item>
          </Col>
        </Row>
        <div className="flex justify-end gap-2 mt-1">
          <Button
            type="button"
            variant="outlined"
            title="Cancel"
            onClick={() => setOpen(false)}
          />
          <Button title="Save" type="submit" />
        </div>
      </Form>
    </Modal>
  );
}

export default VehicleForm;
