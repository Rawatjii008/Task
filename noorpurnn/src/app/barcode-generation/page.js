"use client";
import React, { useEffect, useState } from "react";
import { httpService } from "@/helper/apiservices/httpserivce";
import QRCode from "qrcode.react";

const BarcodeGeneration = () => {
  const [limitedUser, setLimitedUser] = useState([]);

  useEffect(() => {
    fetchLimitedUser();
  }, []);

  const fetchLimitedUser = async () => {
    try {
      const req = await fetch(`${httpService}/ward-barcode-genration`);
      const res = await req.json();

      // Filter users from Ward 23
      const filter = res?.limituser?.filter((item) => item.Ward == "23");
      setLimitedUser(filter);
    } catch (error) {
      console.error("Error fetching limited users:", error);
    }
  };

  return (
    <>
      <style jsx>{`
        @media print {
          body {
            margin: 0;
            padding: 0;
          }
          .print-container {
            width: 100%;
            page-break-after: always;
            border: none;
          }
          .barcode-card {
            page-break-inside: avoid;
            border: 1px solid black;
            margin-bottom: 10px;
          }
          .spancol{
            color : green
          }
        }
      `}</style>
      
      <h1 className="text-2xl w-1/2 font-bold mx-auto my-2 text-center bg-cyan-950 text-white py-4">
        Barcode Generation
      </h1>
      <div className="grid grid-cols-1 w-2/5 gap-10 mx-auto p-4 print-container">
        {limitedUser.map((item) => {
          const barcodeData = JSON.stringify({
            id: item.Unique_Property_ID,
            name: item.Name_of_Household_Owner,
            email: item.email,
          });

          return (
            <div className="border-2 border-black rounded-lg shadow-md barcode-card" key={item.Unique_Property_ID}>
              <div className="text-2xl flex justify-center py-2 border-b-2 border-black font-semibold">
                <span className="text-green-600 font-bold spancol uppercase">
                  Nagar Palika Parishad Noorpur (U.P.)
                </span>
              </div>
              <div className="flex justify-between p-5">
                <div className="flex-1">
                  <div className="text-2xl font-bold">
                    Unique ID :{" "}
                    <span className="font-bold">
                      {item.Unique_Property_ID}
                    </span>
                  </div>
                  <div className="text-2xl font-bold">
                    Name of Owner :{" "}
                    <span className="font-bold">
                      {item.Name_of_Household_Owner}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <div className="flex-1">
                      <p className="text-2xl font-bold">
                        Locality :{" "}
                        <span className="font-bold">
                          {item.Name_of_Localaty}
                        </span>
                      </p>
                      <p className="text-2xl font-bold">
                        Ward No :{" "}
                        <span className="font-normal">{item.Ward}</span>
                      </p>
                    </div>
                    <div className="ml-4 mt-2">
                      <QRCode
                        value={`https://nigamnurpur.duckdns.org/dashboard/${item.Unique_Property_ID}/updateuser`}
                        size={120}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default BarcodeGeneration;
