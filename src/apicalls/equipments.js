import { axiosInstance } from "./axiosInstance";

//add equipment
export const AddEquipment = async (payload) => {
  try {
    const response = await axiosInstance.post(
      "/api/equipments/add-equipment",
      payload
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};

//Get all equipments
export const GetAllEquipments = async () => {
  try {
    const response = await axiosInstance.get("/api/equipments/get-all-equipments");
    return response.data;
  } catch (error) {
    throw error;
  }
};

//Update equipments
export const UpdateEquipment = async (payload) => {
  try {
    const response = await axiosInstance.put(`/api/equipments/update-equipment/${payload._id}`, payload);
    return response.data;
  } catch (error) {
    throw error;
  }
};

//Delete equipments
export const DeleteEquipment = async (id) => {
  try {
    const response = await axiosInstance.delete(`/api/equipments/delete-equipment/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};