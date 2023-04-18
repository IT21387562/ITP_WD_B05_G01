import { axiosInstance } from "./axiosInstance";

//register user

export const RegisterUser = async (payLoad) => {
  try {
    const response = await axiosInstance.post("/api/users/register", payLoad);
    return response.data;
  } catch (error) {
    throw error;
  }
};

//login
export const LoginUser = async (payLoad) => {
  try {
    const response = await axiosInstance.post("/api/users/login", payLoad);
    return response.data;
  } catch (error) {
    throw error;
  }
};

//get user details
export const GetLoggedInUserDetails = async () => {
  try {
    const response = await axiosInstance.get("/api/users/get-logged-in-user");
    return response.data;
  } catch (error) {
    throw error;
  }
};

//get all users
export const GetAllUsers = async (role) => {
  try {
    const response = await axiosInstance.get(`/api/users/get-all-users/${role}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

//get user by Id
export const GetUserById = async(id) =>{
  try {
    const response= await axiosInstance.get(`/api/users/get-user-by-id/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
}

