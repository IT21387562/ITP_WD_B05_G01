import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { GetLoggedInUserDetails } from "../apicalls/users";
import { message } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { SetUser } from "../redux/usersSlice";
import { HideLoading, ShowLoading } from "../redux/loadersSlice";
// import { useState } from 'react';

function ProtectedRoute({ children }) {
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.users);
  const dispatch = useDispatch();

  const validateUserToken = async () => {
    try {
      dispatch(ShowLoading());
      const response = await GetLoggedInUserDetails();
      dispatch(HideLoading());
      if (response.success) {
        dispatch(SetUser(response.data));
      } else {
        localStorage.removeItem("token");
        navigate("/login");
        // message.error(response.message);
        message.error(response.message);
      }
    } catch (error) {
      dispatch(HideLoading());
      //   message.error(error.message);
      // message.error(error.message);

      localStorage.removeItem("token");
      navigate("/login");
      dispatch(HideLoading());
      message.error(error.message);
    }
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login");
    } else {
      validateUserToken();
    }
  }, []);

  return (
    <div>
      {user && (
        <div className="p-1">
          <div className="header p-3 bg-home flex justify-between rounded items-center">
            <h1
              className="text-2xl text-white font-bold cursor-pointer"
              onClick={() => navigate("/")}
            >
              Morawakkorale Tea Producer
            </h1>

            <div className="flex items-center gap-3 bg-primary p-1 rounded">
              <i className="ri-user-fill text-white"></i>
              <span
                className="text-md underline text-white"
                onClick={() => navigate("/profile")}
              >
                {user.name.toUpperCase()}
              </span>
              <i
                className="ri-logout-circle-r-line text-white"
                onClick={() => {
                  localStorage.removeItem("token");
                  navigate("/login");
                }}
              ></i>
            </div>
          </div>
          <div className="content mt-1">{children}</div>
        </div>
      )}
    </div>
  );
}

export default ProtectedRoute;
