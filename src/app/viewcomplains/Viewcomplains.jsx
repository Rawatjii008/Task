"use client";
import { allComplains } from "@/helper/apiservices/ContactDetails";
import React, { useEffect, useState } from "react";

const Viewcomplains = () => {
  const initialComplains = [];
  const [complains, setComplains] = useState(initialComplains);
  const allComplain = async () => {
    const response = await allComplains();
    console.log(response.data.getAllComplains);
    setComplains(response.data.getAllComplains);
  };

  console.log(complains, "complain");

  useEffect(() => {
    allComplain();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-full mx-auto bg-white shadow-md rounded-lg p-8">
        <h1 className="text-2xl font-bold mb-6">Complaints List</h1>
        {complains ? (
          <div className="grid grid-cols-2 gap-4">
            {complains.map((ele) => (
              <div key={ele._id} className="bg-white p-4 ">
                <div className=" p-4 rounded-lg shadow w-full">
                  <div className=" mb-6 flex items-center">
                    <div className="text-2xl font-bold ">Complaint ID:</div>
                    <div className="text-lg font-bold ">{ele._id}</div>
                  </div>
                  <ul>
                    <li>
                      <span className="font-bold ">Complainer Name:</span>{" "}
                      {ele.complainerName}
                    </li>
                    <li>
                      <span className="font-bold">Complainer Mobile:</span>{" "}
                      {ele.complainerMobile}
                    </li>
                    <li>
                      <span className="font-bold">Complainer Email:</span>{" "}
                      {ele.complainerEmail}
                    </li>
                    <li>
                      <span className="font-bold">Subject:</span>{" "}
                      {ele.complainSub}
                    </li>
                    <li>
                      <span className="font-bold">Description:</span>{" "}
                      {ele.complainDesc}
                    </li>
                    <li>
                      <span className="font-bold">Zone:</span>{" "}
                      {ele.complainZone}
                    </li>
                    <li>
                      <span className="font-bold">Address:</span>{" "}
                      {ele.complainAddress}
                    </li>
                    <li>
                      <span className="font-bold">Landmark:</span>{" "}
                      {ele.complainLandmark}
                    </li>

                    <li>
                      <span className="font-bold">
                        Complainer ComplainDate:
                      </span>{" "}
                      {new Date(ele.complainDate).toLocaleDateString()}
                    </li>
                    <li>
                      <span className="font-bold">
                        Complainer ComplainTime:
                      </span>{" "}
                      {new Date(ele.complainTime).toLocaleTimeString()}
                    </li>
                  </ul>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-500">No complaints found.</p>
        )}
      </div>
    </div>
  );
};

export default Viewcomplains;
