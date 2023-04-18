import React from "react";
import { Col, Form, message, Modal, Row } from "antd";
import Button from "../../../components/Button";
import { useDispatch, useSelector } from "react-redux";
import { AddEquipment, UpdateEquipment } from "../../../apicalls/equipments";
import { HideLoading, ShowLoading } from "../../../redux/loadersSlice";

function EquipmentForm({ open, setOpen, reloadEquipments , setFormType , formType, selectedEquipment, setSelectedEquipment}) {
  const { user } = useSelector((state) => state.users);
  const dispatch = useDispatch();
  const onFinish = async (values) => {
    try {
      dispatch(ShowLoading());

      values.createdBy = user._id;

      let response = null;
      if(formType == "add"){
        response = await AddEquipment(values);
      }else{
        values._id = selectedEquipment._id;
        response = await UpdateEquipment(values);
      }
      if (response.success) {
        message.success(response.message);
        reloadEquipments();
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
      title={formType === "add" ? "Add Equipment" : "Update Equipment"}
      open={open}
      onCancel={() => setOpen(false)}
      centered
      width={800}
      footer={null}
    >
      <Form layout="vertical" onFinish={onFinish}
      initialValues={selectedEquipment}
      >
        <Row gutter={20}>
          <Col span={12}>
            <Form.Item
              label="Name"
              name="type"
              rules={[
                {
                  required: true,
                  message: "Please Enter Name of the Equipment",
                },
              ]}
            >
              <input type="text" />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              label="Purchase Date"
              name="purchase_date"
              rules={[
                {
                  required: true,
                  message: "Please Enter Purchase Date of the Equipment",
                },
              ]}
            >
              <input type="date" />
            </Form.Item>
          </Col>
          <Col span={24}>
            <Form.Item
              label="Image URL"
              name="image"
              rules={[
                {
                  required: true,
                  message: "Please Enter Image URL of the Equipmenet",
                },
              ]}
            >
              <input type="text" />
            </Form.Item>
          </Col>
          <Col span={24}>
            <Form.Item
              label="Availability"
              name="availability"
              rules={[
                {
                  required: true,
                  message: "Please Enter Availability of the Equipment",
                },
              ]}
            >
              <input type="number" />
            </Form.Item>
            </Col>
          <Col span={24}>
            <Form.Item
              label="Maintainance History"
              name="maintainance_history"
              rules={[
                {
                  required: true,
                  message: "Please Maintainance History of the Equipment",
                },
              ]}
            >
              <textarea type="text" />
            </Form.Item>
          </Col>

          <Col span={24}>
            <Form.Item
              label="Warrenty Details"
              name="warrenty"
              rules={[
                {
                  required: true,
                  message: "Please Warrenty Details of the Equipment",
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

export default EquipmentForm