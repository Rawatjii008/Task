"use client";
import Cardbutton from "@/components/cardbutton";
import { fetchUserDetails } from "@/helper/apiservices/fetchUserDetails";
import QRCode from "qrcode.react";
import React, { useEffect, useState } from "react";

const UserComponent = ({ params }) => {
  const [userDetails, setUserDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getUserDetails = async () => {
      try {
        const response = await fetchUserDetails(params.userId);
        setUserDetails(response.result);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    getUserDetails();
  }, [params.userId]);

  if (loading) return <p className="text-center text-lg">Loading...</p>;
  if (error) return <p className="text-center text-red-500">Error: {error}</p>;

  return (
    <div className="flex flex-col items-center py-10">
      {/* <div className="divide-y divide-gray-400 flex justify-center flex-col border-2  border-gray-400 rounded-md p-5 m-5 w-auto lg:w-1/3"> */}
        {/* <div className="mx-auto pb-5">Welcome : {userDetails.Name_of_Household_Owner}</div>
        <div className="mx-auto pt-5">
          Your Garbage Collected Status Is :{" "}
          {userDetails.Garbage_Collected ? "✅" : "❌"}
        </div>
      </div> */}
      <div className="w-auto lg:w-10/12 bg-white shadow-md rounded-lg overflow-hidden ">
        <h1 className="text-2xl font-bold text-center bg-cyan-950 text-white py-4">
          User Details
        </h1>
        {userDetails && (
          <div className="w-full leading-normal grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4 p-10">
            
            <div className="flex  justify-start  ">
              <p className="font-bold">Unique Property ID :</p>
              <p> {userDetails.Unique_Property_ID}</p>
            </div>
            <div className="flex  justify-start "> 
              <p className="font-bold"> Name of Household Owner :</p>
              <p>  {userDetails.Name_of_Household_Owner}</p>
            </div>
            <div className="flex justify-start "> 
              <p className="font-bold"> Name of Locality :</p>
              <p>   {userDetails.Name_of_Localaty}</p>
            </div>
            <div className="flex  justify-start"> 
              <p className="font-bold"> Mobile No :</p>
              <p>    {userDetails.Mobile_No}</p>
            </div>
            <div className="flex  justify-start"> 
              <p className="font-bold"> Ward :</p>
              <p>{userDetails.Ward}</p>
            </div>
            <div className="flex  justify-start"> 
              <p className="font-bold"> Your Garbage Collected Status Is :</p>
              <p> {userDetails.Garbage_Collected ? "✅" : "❌"}</p>
            </div>

          </div>
        )}
      </div>

      <Cardbutton/>
      

      {/* {userDetails && (
        <div className="modal bg-white rounded-lg p-8 max-w-sm md:max-w-md lg:max-w-lg relative shadow-lg mt-5">
          <div className="flex flex-col items-center">
            <QRCode
              // value={(JSON.stringify(userDetails.result))}
              value={`https://noorpurnn.vercel.app/dashboard/${params.userId}/updateuser`}
              size={256}
              className="mb-4"
            />
            <p className="text-gray-700 text-center">
              Scan the QR code to visit the link
            </p>
          </div>
        </div>
      )} */}

      {/* {userDetails && (
        <div className="modal bg-white rounded-lg p-8 max-w-full w-full sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl relative shadow-lg mt-5">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between space-y-4 md:space-y-0">
            
            <div className="flex flex-col space-y-4">
              <p className="text-gray-700">
                <span className="font-semibold">User ID :</span> {params.userId}
              </p>
              <p className="text-gray-700 ">
               
                <span className="font-semibold">Name :</span>{" "}
                {userDetails.Name_of_Localaty}
              </p>
              <p className="text-gray-700">
                <span className="font-semibold">Residential :</span>{" "}
                {userDetails.Residential}
              </p>
            </div>

            <div className="flex items-center md:ml-4">
              <QRCode
                value={`https://noorpurnn.vercel.app/dashboard/${params.userId}/updateuser`}
                size={160} 
                className="ml-0 md:ml-4"
              />
            </div>
          </div>
        </div>
      )} */}
    </div>
  );
};

export default UserComponent;
