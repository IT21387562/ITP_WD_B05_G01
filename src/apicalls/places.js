import { axiosInstance } from "./axiosInstance";

//add place
export const AddPlace = async (payload) => {
  try {
    const response = await axiosInstance.post(
      "/api/places/add-place",
      payload
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};

//Get all places
export const GetAllPlaces = async () => {
  try {
    const response = await axiosInstance.get("/api/places/get-all-places");
    return response.data;
  } catch (error) {
    throw error;
  }
};

//Update places
export const UpdatePlace = async (payload) => {
  try {
    const response = await axiosInstance.put(`/api/places/update-place/${payload._id}`, payload);
    return response.data;
  } catch (error) {
    throw error;
  }
};

//Delete places
export const DeletePlace = async (id) => {
  try {
    const response = await axiosInstance.delete(`/api/places/delete-place/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};