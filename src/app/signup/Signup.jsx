"use client";
import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { signupAdmin } from "@/helper/apiservices/adminService";

const Signup = () => {
  const route = useRouter();
  const formFields = [
    {
      name: "name",
      type: "text",
      label: "Name",
    },
    {
      name: "email",
      type: "email",
      label: "Email Address",
    },
    {
      name: "password",
      type: "password",
      label: "Password",
    },

    {
      name: "role",
      type: "select",
      label: "Role",
      options: [
        { value: "", label: "Select role" },
        { value: "user", label: "User" },
        { value: "garbage_collector", label: "Garbage Collector" },
      ],
    },
  ];

  const defaultValue = {
    name: "",
    password: "",
    email: "",
    phoneNumber: "",
    role: "",
  };

  const validationSchema = Yup.object({
    name: Yup.string()
      .max(15, "Must be 15 characters or less")
      .required("Required"),
    password: Yup.string()
      .required("Required")
      .min(8, "Password must be at least 8 characters"),

    email: Yup.string().email("Invalid email address").required("Required"),

    role: Yup.string()
      .oneOf(["user", "garbage_collector"], "Invalid Role")
      .required("Required"),
  });

  const handleSubmit = async (values, { resetForm }) => {
    const response = await signupAdmin(values);
    if (response) {
      route.push("/login");
      resetForm();
    }
  };

  const designer_life = "/undraw_designer_life.svg";

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="flex flex-col gap-4  md:flex-row lg:w-4/5 w-11/12 h-4/5 mb-2 lg:h-auto m-10 border border-gray-300 rounded-lg overflow-hidden justify-center shadow-xl">
        <div className="md:block md:w-1/2 ml-2">
          <Image
            src={designer_life}
            width={500} 
            height={400} 
            alt="Designer Life"
          />
        </div>
        <div className="w-full md:w-1/2 p-4 sm:p-6 md:p-8  bg-white ">
          <h2 className="mb-4 sm:mb-6 text-2xl font-bold text-center">
            Sign Up
          </h2>
          <Formik
            initialValues={defaultValue}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {() => (
              <Form className="space-y-2 sm:space-y-4">
                {formFields.map((item, index) => (
                  <div key={index} className="mb-2 sm:mb-4">
                    <label
                      htmlFor={item.name}
                      className="block text-sm font-medium text-gray-700"
                    >
                      {item.label}
                    </label>
                    {item.type === "select" ? (
                      <Field
                        as="select"
                        name={item.name}
                        className="w-full px-3 py-2 mt-1 text-gray-700 border rounded-md focus:outline-none focus:ring-1 focus:border-primary"
                      >
                        {item.options.map((option, optionIndex) => (
                          <option key={optionIndex} value={option.value}>
                            {option.label}
                          </option>
                        ))}
                      </Field>
                    ) : (
                      <Field
                        className="w-full px-3 py-2 mt-1 text-gray-700 border rounded-md focus:outline-none focus:ring-1 focus:border-primary "
                        type={item.type}
                        name={item.name}
                        id={item.name}
                        placeholder={`Enter your ${item.label}`}
                      />
                    )}
                    <ErrorMessage
                      name={item.name}
                      component="div"
                      className="mt-1 text-sm text-red-600"
                    />
                  </div>
                ))}
                <div>
                  <button
                    type="submit"
                    className="w-full px-4 py-2 font-bold text-white bg-tablist rounded-md hover:bg-activetabs focus:outline-none focus:ring focus:border-blue-300"
                  >
                    Submit
                  </button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default Signup;
