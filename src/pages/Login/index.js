import React, { useEffect } from "react";
import { Form, message } from "antd";
import Button from "../../components/Button";
import { Link, useNavigate } from "react-router-dom";
import { LoginUser } from "../../apicalls/users";
import { useDispatch } from "react-redux";
import { HideLoading, ShowLoading } from "../../redux/loadersSlice";

function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const onFinish = async (values) => {
    try {
      dispatch(ShowLoading());
      const response = await LoginUser(values);
      dispatch(HideLoading());
      if (response.success) {
        message.success(response.message);
        localStorage.setItem("token", response.data);
        window.location.href = "/";
      } else {
        message.error(response.message);
      }
    } catch (error) {
      dispatch(HideLoading());
      message.error(error.message);
    }
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      navigate("/");
    }
  }, []);

  return (
    <div className="h-screen bg-home flex items-center justify-center">
      <div className="authentication-form bg-white p-3 rounded">
        <h1 className="text-black text-2xl font-bold mb-1">
          Delivery Manager - Login
        </h1>
        <hr />
        <Form layout="vertical" onFinish={onFinish} className="mt-1">
          <Form.Item label="  Email" name="email" 
          rules = {[
            {
            required:true,
            message: "Please enter your email",
            },
          ]}>
            <input type="email" placeholder="E-mail" />
          </Form.Item>
          <Form.Item label="  Password" name="password"
          rules = {[
            {
            required:true,
            message: "Please enter your Password",
            },
          ]}>
            <input type="password" placeholder="Password" />
          </Form.Item>

          <div className=" flex text-center mt-2 items-center justify-center flex-col gap-1">
            <Button title="Login" type="submit" />
            <Link
              to="/register"
              className="text-secondary font-bold text-sm underline"
            >
              Don't have an account? Click Here To Register
            </Link>
          </div>
        </Form>
      </div>
    </div>
  );
}

export default Login;
