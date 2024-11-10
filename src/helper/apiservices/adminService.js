import axios from "axios";
import { toast } from "react-toastify";
import { httpService } from "./httpserivce";

export const getCurrentUserDetails = async () => {
  try {
    const response = await axios.get(
      `${httpService}/admin/currentuser`
    ); 
    // console.log({ response });
    return response.data;
  } catch (error) {
    console.log({ error });
  }
};

export const loginAdmin = async (crendtials) => {
  try {
    const response = await axios.post(
      `${httpService}/admin/login`,
      crendtials
    );
    toast.success("Login sucessfully");
    return response;
  } catch (error) {
    console.log(error);
    toast.error("Internal Server Issue");
  }
};

export const signupAdmin = async (crendtials) => {
  try {
    const response = await axios.post(
      `${httpService}/admin/signup`,
      crendtials
    );
    toast.success("Signup sucessfully");
    console.log({ response });
    return response;
  } catch (error) {
    console.log(error);
    toast.error("Internal Server Issue");
  }
};

export const logoutAdmin = async () => {
  try {
    const response = await axios.post(`${httpService}/admin/logout`);
    toast.warning("Logout sucessfully");
    console.log({ response });
    return response.data;
  } catch (error) {
    console.log(error);
    toast.error("Internal Server Issue");
  }
};
export const resetPassword = async (credentials) => {
  try {
    const response = await axios.patch(
      `${httpService}/admin/forgetpass`,
      credentials
    );
    toast.warning("Reset the password successfully");
    console.log({ response });
    return response.data;
  } catch (error) {
    console.log(error);
    toast.error("Internal Server Issue");
  }
};
