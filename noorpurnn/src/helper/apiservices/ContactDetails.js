import axios from "axios";
import { toast } from "react-toastify";
import { httpService } from "./httpserivce";

export const ContactDetails = async (credential) => {
  try {
    const response = await axios.post(`${httpService}/contact`, credential);
    console.log(response);
    toast.success("We Will contact You Soon");
    return response;
  } catch (error) {
    console.error("Error fetching user details:", error);
    toast.error("Internal Server Issue");
    return { error: error.message };
  }
};

export const complainForm = async (credential) => {
  try {
    const response = await axios.post(`${httpService}/complaint`, credential);
    toast.success("Complain Registered Successfully");
    return response;
  } catch (error) {
    console.error("Error fetching user details:", error);
    toast.error("Internal Server Issue");
  }
};

export const allComplains = async () => {
  try {
    const response = await axios.post(`${httpService}/complaint/viewcomplains`);
    return response;
  } catch (error) {
    console.error("Error fetching user details:", error);
  }
};
