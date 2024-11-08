"use client";
import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useRouter } from "next/navigation";
import Image from "next/image";

const validationSchema = Yup.object().shape({
  idInput: Yup.string()
    .length(17, "Please enter exactly 17 characters.")
    .required("This field is required."),
});

const CheckUserInfo = () => {
  const router = useRouter();

  const handleGenerate = async (values) => {
    router.push(`/dashboard/${values.idInput}`);
  };

  
  const Laptop_img = "/Laptop_pic.jpg";

  return (
    <>
      <div
        className="flex flex-col items-center justify-center min-h-screen bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1594581979864-36977b15d0dc?q=80&w=1912&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
        }}
      >
        <div className="flex flex-col md:flex-row w-11/12 md:w-3/4 mx-auto my-0 gap-10 bg-white bg-opacity-90 p-6 md:p-10 rounded-lg shadow-lg">
          <div className="w-full md:w-1/2 flex items-center justify-center mt-4 md:mt-0">
            <Image
              src={Laptop_img}
              alt="Side"
              className="w-full h-auto rounded-lg shadow-md"
              width={500}
              height={500}
              layout="responsive"
            />
          </div>
          <div className="w-full md:w-1/2 flex flex-col justify-center text-center space-y-2">
            <label
              htmlFor="idInput"
              className="text-lg font-bold uppercase text-gray-700"
            >
              Enter Seventeen Digit ID For Check Status
            </label>
            <p className="text-gray-600">For Example (0909001001000261R)</p>
            <Formik
              initialValues={{ idInput: "" }}
              validationSchema={validationSchema}
              onSubmit={handleGenerate}
            >
              {({ isValid, dirty }) => (
                <Form>
                  <Field
                    id="idInput"
                    name="idInput"
                    placeholder="Enter Seventeen Digit ID"
                    className="p-4 text-lg border-2 rounded w-full mt-5"
                  />
                  <ErrorMessage
                    name="idInput"
                    component="p"
                    className="text-red-500"
                  />
                  <button
                    type="submit"
                    className={`bg-cyan-700 hover:bg-cyan-900 text-white font-bold py-2 px-4 rounded mt-4 w-full md:w-auto ${
                      !isValid || !dirty ? "opacity-50 cursor-not-allowed" : ""
                    }`}
                    disabled={!isValid || !dirty}
                  >
                    Check Your Status
                  </button>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </>
  );
};

export default CheckUserInfo;
