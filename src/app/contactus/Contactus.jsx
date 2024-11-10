"use client";
import CommitteeBoard from "@/components/CommitteeBoard";
import Contact_formula from "@/components/contact_formula";
import Municipal_Works_Department from "@/components/Municipal_Works_Department";
import { ContactDetails } from "@/helper/apiservices/ContactDetails";
import { ErrorMessage, Field, Form, Formik } from "formik";
import Image from "next/image";
import React from "react";
import * as yup from "yup";

const ContactForm = () => {
  const field = [
    {
      name: "name",
      type: "text",
    },
    {
      name: "email",
      type: "email",
    },
    {
      name: "phone",
      type: "text",
    },
    {
      name: "subject",
      type: "text",
    },
    {
      name: "message",
      type: "text",
    },
  ];

  const defaultValue = {
    name: "",
    email: "",
    subject: "",
    phone: "",
    message: "",
  };

  const validationSchema = yup.object().shape({
    name: yup.string().required("Name is required"),
    email: yup.string().required("Email is required").email("Email is invalid"),
    subject: yup.string().required("Subject is required"),
    phone: yup
      .string()
      .required("Phone is required")
      .matches(/^[0-9]{10}$/, {
        message: "Phone number must be exactly 10 digits",
        excludeEmptyString: true,
      }),
    message: yup.string().required("Message is required"),
  });

  const handleSubmit = async (values, { resetForm, setErrors }) => {
    try {
      const response = await ContactDetails(values);
      if (response.data) {
        resetForm();
      }
    } catch (error) {
      console.error("contact details failed:", error);
      setErrors({ submit: "Contact details failed. Please try again." });
    }
  };

  const Keyboard_image = "/KeyBoard_image.jpg";
  return (
    <>
      <div className=" md:w-4/5 w-11/12 mx-auto p-6 shadow-lg rounded my-20 flex flex-col sm:flex-row">
        <div className="w-full sm:w-1/2 sm:pr-4 mb-4 sm:mb-0">
          <div className="relative w-full h-64 sm:h-full">
            <Image
              src={Keyboard_image}
              alt="Keyboard"
              className="w-full h-full object-cover rounded"
              layout="fill"
            />
          </div>
        </div>
        <div className="w-full sm:w-1/2 sm:pl-4">
          <h1 className="text-center text-2xl font-bold text-gray-700 mb-4">
            Contact Us
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
                    {item.name.charAt(0).toUpperCase() + item.name.slice(1)}
                  </label>
                  <Field
                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                    type={item.type}
                    name={item.name}
                    id={item.name}
                    placeholder={`Enter your ${item.name}`}
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
                  className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
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
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <Contact_formula />
      </div>
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <Municipal_Works_Department />
      </div>
      <div className="min-h-screen flex items-center py-24 justify-center bg-gray-100">
        <CommitteeBoard />
      </div>
    </>
  );
};

export default ContactForm;
