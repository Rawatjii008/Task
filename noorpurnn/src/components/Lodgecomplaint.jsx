"use client";
import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { complainForm } from "@/helper/apiservices/ContactDetails";

const Lodgecomplaint = ({ setLodge }) => {
  const field = [
    {
      label: "Complaint Subject",
      name: "complainSub",
      type: "text",
    },
    {
      label: "Complaint Description",
      name: "complainDesc",
      type: "text",
    },
    {
      label: "Complaint Zone",
      name: "complainZone",
      type: "text",
    },
    {
      label: "Complaint Address",
      name: "complainAddress",
      type: "text",
    },
    {
      label: "Complaint Landmark",
      name: "complainLandmark",
      type: "text",
    },
    {
      label: "Name",
      name: "complainerName",
      type: "text",
    },
    {
      label: "Email",
      name: "complainerEmail",
      type: "email",
    },
    {
      label: "Phone Number",
      name: "complainerMobile",
      type: "number",
    },
  ];

  const defaultValue = {
    complainSub: "",
    complainDesc: "",
    complainZone: "",
    complainAddress: "",
    complainLandmark: "",
    complainerName: "",
    complainerEmail: "",
    complainerMobile: "",
  };

  const validationSchema = Yup.object({
    complainSub: Yup.string().required("Subject is required"),
    complainDesc: Yup.string().required("Description is required"),
    complainZone: Yup.string().required("Zone is required"),
    complainAddress: Yup.string().required("Address is required"),
    complainerName: Yup.string().required("Name is required"),
    complainerEmail: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    complainerMobile: Yup.string()
      .required("Phone is required")
      .matches(/^[0-9]{10}$/, {
        message: "Phone number must be exactly 10 digits",
        excludeEmptyString: true,
      }),
  });

  const handleSubmit = async (values, { resetForm }) => {
    const response = await complainForm(values);
    if (response.status === 200) {
      resetForm();
      setLodge(false);
    } 
    console.log({response});
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80 overflow-auto">
      <div className="relative p-5 md:p-4 w-full max-w-2xl md:max-w-5xl max-h-full">
        <div className="relative bg-white p-5 md:p-0 rounded-lg shadow">
          <div className=" flex items-center justify-between p-4 md:p-5 border-b rounded-t bg-slate-200">
            <h3 className="text-xl font-semibold text-gray-900">
              Lodge your complaints to Noorpur nagar nigam
            </h3>
            <button
              type="button"
              className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center"
              onClick={() => setLodge(false)}
            >
              <svg
                className="w-3 h-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                />
              </svg>
              <span className="sr-only">Close modal</span>
            </button>
          </div>
          <Formik
            initialValues={defaultValue}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            <Form className="p-4">
              {field.map((item, index) => (
                <div key={index} className="mb-4">
                  <label
                    htmlFor={item.name}
                    className="block text-sm font-medium text-gray-700"
                  >
                    {item.label}
                  </label>
                  <Field
                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                    type={item.type}
                    name={item.name}
                    id={item.name}
                    placeholder={`Enter your ${item.label}`}
                  />
                  <ErrorMessage
                    name={item.name}
                    component="div"
                    className="text-red-600 mt-1 text-sm"
                  />
                </div>
              ))}
              <div className="flex justify-between mt-4">
                <button
                  type="submit"
                  className="bg-primary hover:bg-secondary text-white font-bold py-2 px-4 rounded"
                >
                  Submit
                </button>
                <button
                  type="reset"
                  className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                >
                  Reset
                </button>
              </div>
            </Form>
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default Lodgecomplaint;
