import React from "react";
import { Col, Form, message, Modal, Row } from "antd";
import Button from "../../../components/Button";
import { useDispatch, useSelector } from "react-redux";
import { AddPlace, UpdatePlace } from "../../../apicalls/places";
import { HideLoading, ShowLoading } from "../../../redux/loadersSlice";

function PlaceForm({ open, setOpen, reloadPlaces , setFormType , formType, selectedPlace, setSelectedPlace}) {
  const { user } = useSelector((state) => state.users);
  const dispatch = useDispatch();
  const onFinish = async (values) => {
    try {
      dispatch(ShowLoading());

      values.createdBy = user._id;

      let response = null;
      if(formType == "add"){
        response = await AddPlace(values);
      }else{
        values._id = selectedPlace._id;
        response = await UpdatePlace(values);
      }
      if (response.success) {
        message.success(response.message);
        reloadPlaces();
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
      title={formType === "add" ? "Add Place" : "Update Place"}
      open={open}
      onCancel={() => setOpen(false)}
      centered
      width={800}
      footer={null}
    >
      <Form layout="vertical" onFinish={onFinish}
      initialValues={selectedPlace}
      >
        <Row gutter={20}>
          <Col span={12}>
            <Form.Item
              label="Name"
              name="name"
              rules={[
                {
                  required: true,
                  message: "Please Enter Name of the Place",
                },
              ]}
            >
              <input type="text" />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              label="Owner"
              name="owner"
              rules={[
                {
                  required: true,
                  message: "Please Enter Name of the Owner",
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
                  message: "Please Enter Image URL of the Place",
                },
              ]}
            >
              <input type="text" />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              label="Phone Number"
              name="telephone"
              rules={[
                {
                  required: true,
                  message: "Please Enter Phone Number of the Place",
                },
              ]}
            >
              <input type="text" />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              label="E-mail"
              name="email"
              rules={[
                {
                  required: true,
                  message: "Please Enter email of the Place",
                },
              ]}
            >
              <input type="text" />
            </Form.Item>
          </Col>
          <Col span={24}>
            <Form.Item
              label="Address"
              name="address"
              rules={[
                {
                  required: true,
                  message: "Please Address of the Vehicle"
                },
              ]}
            >
              <textarea type="text" />
            </Form.Item>
          </Col>

          <Col span={24}>
            <Form.Item
              label="Distance(KM) & Other Details"
              name="distance"
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

export default PlaceForm;
