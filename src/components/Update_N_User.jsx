"use client";
import React, { useEffect, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import {
  fetchUserDetails,
  UpdateUserDetails,
} from "@/helper/apiservices/fetchUserDetails";
import { toast } from "react-toastify";

const Update_N_User = ({ userId }) => {
  const [qrValue, setQrValue] = useState([]);

  console.log(qrValue);

  const field = [
    {
      label: "Garbage Collected",
      name: "Garbage_Collected",
      type: "select",
      options: [
        { label: "Your Garbage has been Collected", value: true },
        { label: "Your Garbage has not been Collected", value: false },
      ],
    },
    {
      label: "Remarks",
      name: "Remarks",
      type: "textarea",
    },
  ];

  const defaultValue = {
    Garbage_Collected: "",
    Remarks: "",
  };

  const validationSchema = Yup.object({
    Garbage_Collected: Yup.string().required(
      "Garbage Collected status is required"
    ),
    Remarks: Yup.string().required("Remarks are required"),
  });

  // console.log({ qrValue });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetchUserDetails(userId);
        setQrValue([response.result]);
      } catch (error) {
        console.error("Error fetching user details:", error);
      }
    };

    fetchData();
  }, [userId]);

  const handleSubmit = async (values, { resetForm }) => {
    try {
      values.Garbage_Collected = values.Garbage_Collected === "true";
      const response = await UpdateUserDetails(userId, values);
      const updatedResponse = await fetchUserDetails(userId);
      if (response.success === true) {
        toast.success("Updated user successfully");
      }
      setQrValue([updatedResponse.result]);
      resetForm();
    } catch (error) {
      console.error("Error updating user details:", error);
    }
  };

  return (
    <>
      <div className="flex items-center justify-center mt-10">
        <div className="w-full max-w-4xl bg-white shadow-md rounded-lg overflow-hidden">
          <h1 className="text-2xl font-bold text-center bg-cyan-950 text-white py-4">
            Update User Details
          </h1>
          <hr className="mb-4" />
          <div className="mb-4 overflow-x-auto px-5">
            <table className="border-collapse border border-gray-400 w-full">
              <thead>
                <tr>
                  <th className="p-2 border border-gray-400">Title</th>
                  <th className="p-2 border border-gray-400">Value</th>
                </tr>
              </thead>
              <tbody>
                {qrValue &&
                  qrValue.map((ele, index) => (
                    <React.Fragment key={index}>
                      <tr className="border border-gray-400">
                        <td className="p-2 border border-gray-400">
                          Unique Property ID
                        </td>
                        <td className="p-2 border border-gray-400">
                          {ele.Unique_Property_ID}
                        </td>
                      </tr>
                      <tr className="border border-gray-400">
                        <td className="p-2 border border-gray-400">
                          Name of Household Owner 
                        </td>
                        <td className="p-2 border border-gray-400">
                          {ele.Name_of_Household_Owner}
                        </td>
                      </tr>
                      <tr className="border border-gray-400">
                        <td className="p-2 border border-gray-400">
                          Name of Household Owner Father/Husband
                        </td>
                        <td className="p-2 border border-gray-400">
                          {ele.Name_of_Household_Owner_Father_Husband}
                        </td>
                      </tr>
                      <tr className="border border-gray-400">
                        <td className="p-2 border border-gray-400">
                          Name of Locality
                        </td>
                        <td className="p-2 border border-gray-400">
                          {ele.Name_of_Localaty}
                        </td>
                      </tr>
                      <tr className="border border-gray-400">
                        <td className="p-2 border border-gray-400">
                          Mobile No
                        </td>
                        <td className="p-2 border border-gray-400">
                          {ele.Mobile_No}
                        </td>
                      </tr>
                      <tr className="border border-gray-400">
                        <td className="p-2 border border-gray-400">
                          Garbage Collected
                        </td>
                        <td className="p-2 border border-gray-400">
                          {ele.Garbage_Collected === true
                            ? "Garbage has been collected "
                            : "Garbage has not been collected"}
                        </td>
                      </tr>
                      <tr className="border border-gray-400">
                        <td className="p-2 border border-gray-400">Remarks</td>
                        <td className="p-2 border border-gray-400">
                          {ele.Remarks}
                        </td>
                      </tr>
                    </React.Fragment>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div className=" md:w-1/2 w-11/12 mx-auto p-4 shadow-lg rounded bg-white my-16">
        <h1 className="text-center text-2xl font-bold bg-cyan-950 text-white py-4 rounded ">
          Update User Details
        </h1>
        <hr className="mb-4" />
        <Formik
          initialValues={defaultValue}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          <Form>
            {field.map((item, index) => (
              <div key={index} className="mb-4">
                <label
                  htmlFor={item.name}
                  className="block text-sm font-medium text-gray-700"
                >
                  {item.label ||
                    item.name.charAt(0).toUpperCase() + item.name.slice(1)}
                </label>
                {item.type === "select" ? (
                  <Field
                    as="select"
                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                    name={item.name}
                    id={item.name}
                  >
                    <option value="" label="Select an option" />
                    {item.options.map((option, idx) => (
                      <option
                        key={idx}
                        value={option.value}
                        label={option.label}
                      />
                    ))}
                  </Field>
                ) : item.type === "textarea" ? (
                  <Field
                    as="textarea"
                    className="mt-1 block h-32 w-full p-2 border border-gray-300 rounded-md"
                    name={item.name}
                    id={item.name}
                    placeholder={`Enter your ${item.name}`}
                  />
                ) : (
                  ""
                )}
                <ErrorMessage
                  name={item.name}
                  component="div"
                  className="text-red-600 mt-1 text-sm"
                />
              </div>
            ))}
            <div className="flex justify-end mt-4">
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
                Submit
              </button>
            </div>
          </Form>
        </Formik>
      </div>
    </>
  );
};

export default Update_N_User;
