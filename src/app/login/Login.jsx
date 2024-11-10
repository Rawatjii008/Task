"use client";
import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { loginAdmin } from "@/helper/apiservices/adminService";

const Login = () => {
  const route = useRouter();
  const formFields = [
    {
      name: "email",
      type: "email",
      label: "Email",
    },
    {
      name: "password",
      type: "password",
      label: "Password",
    },
  ];

  const defaultValue = { email: "", password: "" };

  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email address").required("Required"),
    password: Yup.string().required("Required"),
  });

  const handleSubmit = async (values, { resetForm, setErrors }) => {
    try {
      const response = await loginAdmin(values);
      if (response.data) {
        route.push("/dashboard");
        resetForm();
      }
    } catch (error) {
      console.error("Login failed:", error);
      setErrors({ submit: "Login failed. Please try again." });
    }
  };

  const designer_life = "/undraw_designer_life.svg";

  return (
    <div className="flex justify-center items-center bg-gray-100 min-h-screen ">
      <div className="flex flex-col md:flex-row w-4/5 min-h-96 m-10  lg:h-auto border gap-4 border-gray-300 rounded-lg overflow-hidden justify-center shadow-xl">
        <div className="md:block md:w-1/2 ml-2">
          <Image
            src={designer_life}
            width={500}
            height={400}
            alt="Designer Life"
          />
        </div>
        <div className="w-full md:w-1/2 p-4 sm:p-6 md:p-8 bg-white py-auto">
          <h2 className="mb-4 sm:mb-6 text-2xl font-bold text-center">Login</h2>
          <Formik
            initialValues={defaultValue}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ isSubmitting }) => (
              <Form className="space-y-2 sm:space-y-4">
                {formFields.map((item, index) => (
                  <div key={index} className="mb-2 sm:mb-4">
                    <label
                      htmlFor={item.name}
                      className="block text-sm font-medium text-gray-700"
                    >
                      {item.label}
                    </label>
                    <Field
                      className="w-full px-2 py-1 sm:px-3 sm:py-2 mt-1 text-gray-700 border rounded-md focus:outline-none focus:ring-1 focus:border-primary"
                      type={item.type}
                      name={item.name}
                      id={item.name}
                      placeholder={`Enter your ${item.name}`}
                    />

                    <ErrorMessage
                      name={item.name}
                      component="div"
                      className="mt-1 text-sm text-red-600"
                    />
                  </div>
                ))}
                <Link
                  href="/forgetpassword"
                  className="text-sm text-blue-500 hover:text-blue-700 flex justify-center"
                >
                  Forgot password?
                </Link>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full px-4 py-2 font-bold text-white bg-tablist rounded-md hover:bg-activetabs focus:outline-none "
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

export default Login;
