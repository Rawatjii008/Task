import axios from "axios";
import { httpService } from "./httpserivce";

export const fetchAllUserDetails = async () => {
  try {
    const response = await axios.post(`${httpService}/noorpuruser`);
    const data = await response.data;
    console.log(response, "fetchalluserdetails");
    return data;
  } catch (error) {
    console.error("Error fetching user details");
    return { error: error.message };
  }
};
export const fetchUserDetails = async (id) => {
  try {
    const response = await axios.get(`${httpService}/noorpuruser/${id}`);
    const data = await response.data;
    console.log({ data });
    return data;
  } catch (error) {
    console.error("Error fetching user details");
    return { error: error.message };
  }
};

export const fetchAllEmployee = async (id) => {
  try {
    const response = await axios.get(`${httpService}/admin/user`);
    const data = await response.data;
    console.log({ data });
    return data;
  } catch (error) {
    console.error("Error fetching user details");
    return { error: error.message };
  }
};

export const fetchAllWards = async (id) => {
  try {
    const response = await axios.get(`${httpService}/user/wards`);
    const data = await response.data;
    console.log({ data });
    return data;
  } catch (error) {
    console.error("Error fetching user details");
    return { error: error.message };
  }
};

export const UpdateUserDetails = async (id, values) => {
  try {
    const response = await axios.put(
      `${httpService}/noorpuruser/${id}`,
      values
    );
    const data = response.data;
    console.log({ data });
    return data;
  } catch (error) {
    console.error("Error fetching user details");
    return { error: error.message };
  }
};
