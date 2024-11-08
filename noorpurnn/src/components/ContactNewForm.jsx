"use client";
import { ErrorMessage, Field, Form, Formik } from "formik";
import React from "react";
import * as yup from "yup";

const ContactNewForm = () => {
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
        {
          name: "subscribe",
          type: "checkbox",
          label: "Subscribe to newsletter"
        },
        {
          name: "contactMethod",
          type: "radio",
          label: "Preferred contact method",
          options: [
            { value: "email", label: "Email" },
            { value: "phone", label: "Phone" },
          ]
        }
      ];

  const defaultValue = {
    name: "",
    email: "",
    subject: "",
    phone: "",
    message: "",
    subscribe: false,
    contactMethod: ""
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
    contactMethod: yup.string().required("Preferred contact method is required"),
  });

  const handleSubmit = async (values, { resetForm }) => {
    resetForm();
  };

  return (
    <div className="w-full max-w-lg mx-auto p-4 shadow-lg rounded bg-white">
      <h1 className="text-center text-2xl font-bold text-primary mb-4">Contact Us</h1>
      <hr className="mb-4" />
      <Formik
        initialValues={defaultValue}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          {field.map((item, index) => (
            <div key={index} className="mb-4">
              <label htmlFor={item.name} className="block text-sm font-medium text-gray-700">
                {item.label || (item.name.charAt(0).toUpperCase() + item.name.slice(1))}
              </label>
              {item.type === "text" || item.type === "email" || item.type === "checkbox" ? (
                <Field
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                  type={item.type}
                  name={item.name}
                  id={item.name}
                  placeholder={item.type !== "checkbox" ? `Enter your ${item.name}` : undefined}
                />
              ) : item.type === "radio" ? (
                item.options.map((option, idx) => (
                  <div key={idx} className="flex items-center mt-1">
                    <Field
                      type="radio"
                      name={item.name}
                      value={option.value}
                      id={`${item.name}_${option.value}`}
                      className="mr-2"
                    />
                    <label htmlFor={`${item.name}_${option.value}`} className="text-sm font-medium text-gray-700">
                      {option.label}
                    </label>
                  </div>
                ))
              ) : null}
              <ErrorMessage
                name={item.name}
                component="div"
                className="text-red-600 mt-1 text-sm"
              />
            </div>
          ))}
          <div className="flex justify-between mt-4">
            <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Submit
            </button>
            <button type="reset" className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">
              Reset
            </button>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default ContactNewForm;
