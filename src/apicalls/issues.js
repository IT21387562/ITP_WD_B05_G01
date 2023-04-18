import { axiosInstance } from "./axiosInstance";

//issue a vehicle
export const IssueVehicle = async (payload) => {
    try {
      const response = await axiosInstance.post("/api/issues/issue-vehicle", payload);
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  //get issues
  export const GetIssues = async (payload)=>{
    try {
      const response = await axiosInstance.post("/api/issues/get-issues", payload);
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  //return vehicle
  export const ReturnVehicle = async (payload) =>{
    try {
      const response = await axiosInstance.post("/api/issues/return-vehicle",payload);
      return response.data;
    } catch (error) {
      throw error;
    }
  }