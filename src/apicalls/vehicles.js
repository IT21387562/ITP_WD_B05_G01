import { axiosInstance } from "./axiosInstance";

//add vehicle
export const AddVehicle = async (payload) => {
  try {
    const response = await axiosInstance.post(
      "/api/vehicles/add-vehicle",
      payload
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};

//Get all Vehicles
export const GetAllVehicles = async () => {
  try {
    const response = await axiosInstance.get("/api/vehicles/get-all-vehicles");
    return response.data;
  } catch (error) {
    throw error;
  }
};

//Update Vehicles
export const UpdateVehicle = async (payload) => {
  try {
    const response = await axiosInstance.put(`/api/vehicles/update-vehicle/${payload._id}`, payload);
    return response.data;
  } catch (error) {
    throw error;
  }
};

//Delete Vehicles
export const DeleteVehicle = async (id) => {
  try {
    const response = await axiosInstance.delete(`/api/vehicles/delete-vehicle/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

//get vehicle by Id
export const GetVehicleById = async (id) => {
  try {
    const response = await axiosInstance.get(`/api/vehicles/get-vehicle-by-id/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

