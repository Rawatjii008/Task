"use client";
import React from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { resetPassword } from "@/helper/apiservices/adminService";

const ForgetPass = () => {
  const router = useRouter();
  const initialValues = {
    email: "",
    password: "",
    confirmPassword: "",
  };

  const validateSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email format").required("Required"),
    password: Yup.string()
      .min(8, "Password must be at least 8 characters")
      .required("Required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("Required"),
  });

  const handleSubmit = async (values, { resetForm, isSubmitting }) => {
    const responce = await resetPassword(values);
    if (responce.success === true) {
      resetForm();
      router.push("/login");
    }
  };

  return (
    <div className="flex justify-center items-center bg-gray-100 min-h-screen ">
      <div className="flex flex-col md:flex-row w-4/5 min-h-96 m-10  lg:h-auto border  border-gray-300 rounded-lg overflow-hidden justify-center shadow-xl">
        <div className="md:block md:w-1/2  ">
          <img
            src={
              "https://plus.unsplash.com/premium_vector-1712161707724-52d6d007b608?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGFzc3dvcmR8ZW58MHwwfDB8fHww"
            }
            alt="Designer Life"
            className="h-96 w-full object-fill "
          />
        </div>
        <div className="w-full md:w-1/2 p-4 sm:p-6 md:p-8 bg-white py-auto">
          <h2 className="mb-4 sm:mb-6 text-2xl font-bold text-center">
            Reset your Password
          </h2>
          <Formik
            initialValues={initialValues}
            validationSchema={validateSchema}
            onSubmit={handleSubmit}
          >
            {({ isSubmitting }) => (
              <Form className="">
                <Field
                  className="w-full px-2 py-1 sm:px-3 sm:py-2  text-gray-700 border rounded-md focus:outline-none focus:ring-0 mt-2 focus:border-primary"
                  name="email"
                  id="email"
                  placeholder="Email"
                  type="email"
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="text-red-500 text-sm"
                />
                <Field
                  className="w-full px-2 py-1 sm:px-3 sm:py-2  text-gray-700 border rounded-md focus:outline-none focus:ring-0 mt-2 focus:border-primary"
                  name="password"
                  id="password"
                  placeholder="New Password"
                  type="password"
                />
                <ErrorMessage
                  name="password"
                  component="div"
                  className="text-red-500 text-sm"
                />
                <Field
                  className="w-full px-2 py-1 sm:px-3 sm:py-2  text-gray-700 border rounded-md focus:outline-none focus:ring-0 mt-2 focus:border-primary"
                  name="confirmPassword"
                  id="confirmPassword"
                  placeholder="Confirm New Password"
                  type="password"
                />
                <ErrorMessage
                  name="confirmPassword"
                  component="div"
                  className="text-red-500 text-sm"
                />
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full mt-3 px-4 py-2 font-bold text-white bg-tablist rounded-md hover:bg-activetabs focus:outline-none "
                >
                  Submit
                </button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default ForgetPass;
