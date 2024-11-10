"use client";
import React, { useState, useContext, useEffect, useMemo, useRef } from "react";
import { newContext } from "@/context/contextFun";
import AllDetailsInfo from "../alldetailsinfo/AllDetailsInfo";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { fetchAllEmployee, fetchAllUserDetails, fetchAllWards } from "@/helper/apiservices/fetchUserDetails";
import moment from "moment";
import { Html5QrcodeScanner } from "html5-qrcode";
import Quagga from 'quagga';
import Barcode from "../admin/Barcode";

const Admin = () => {
  const { garbageUser, load } = useContext(newContext);
  const [user, setUser] = useState([]);
  const [column, setColumn] = useState([]);
  const [loading, setLoading] = useState(true);
  const [result, setResult] = useState(null);
  const scannerRef = useRef(null);

  const fetchData = async () => {
    try {
      const response = await fetchAllUserDetails();
      if (response?.result) {
        setUser(response?.result?.filter((item, index) => {
          return item.Ward == '23'
        }));
        setLoading(false)
      }
      return response;
    } catch (error) {
      console.error("Error fetching user details:", error);
    }
  };

  const getAllEmployee = async () => {
    const res = await fetchAllEmployee();
  }

  const getAllWards = async () => {
    const res = await fetchAllWards();
    console.log('ward', res)
  }

  useEffect(() => {
    getAllEmployee();
    fetchData();
    getAllWards();
    load();
  }, []);

  const columns = [
    {
      field: "Unique_Property_ID",
      headerName: "ID",
      minWidth: 200,
    },
    {
      field: "Name_of_Household_Owner",
      headerName: "Name of Household Owner",
      minWidth: 250,
    },
    {
      field: "Mobile_No",
      headerName: "Mobile Number",
      minWidth: 170,
      renderCell: (params) => {
        return (
          <div className="cellWithImg">
            {params.row.Mobile_No ? params.row.Mobile_No : "Not  Available"}
          </div>
        );
      },
    },
    {
      field: "Name_of_Localaty",
      headerName: "Name of Localaty",
      minWidth: 170,
    },
    {
      field: "Remarks",
      headerName: "Remarks",
      minWidth: 190,
      renderCell: (params) => {
        return (
          <div className="cellWithImg">
            {params.row.Remarks ? params.row.Remarks : "Remarks not added"}
          </div>
        );
      },
    },
    {
      field: "Ward",
      headerName: "Ward",
      minWidth: 100,
    },
    // {
    //   field: "Name_of_Household_Owner_Father_Husband",
    //   headerName: "Name of Household Owner Father/Husband",
    //   minWidth: 250,
    // },
    {
      field: "Garbage_Collected",
      headerName: "Garbage Collected",
      minWidth: 150,
      renderCell: (params) => {
        return (
          <div className="cellWithImg">
            {params.row.Garbage_Collected ? "✅" : "❌"}
          </div>
        );
      },
    },
  ];

  const styles = {
    card: {
      border: '1px solid #ccc',
      borderRadius: '8px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      padding: '16px',
      margin: '20px auto',
      maxWidth: '100px',
      backgroundColor: '#fff',
    },
    scanner: {
      width: '100%',
      height: '400px', // Fixed height for the scanner view
      borderRadius: '8px',
      overflow: 'hidden',
      backgroundColor: '#f7f7f7', // Light background for the scanner area
    },
    error: {
      color: 'red',
      fontWeight: 'bold',
    }
  };

  // useEffect(() => {
  //   const scanner = new Html5QrcodeScanner(
  //     "reader",
  //     {
  //       qrbox: {
  //         width: 250,
  //         height: 250,
  //       },
  //       fps: 5,
  //     },
  //     []
  //   );
  //   scanner.render(success, error);
  //   function success(result) {
  //     scanner.clear();
  //     setResult(result);
  //   }
  //   function error(err) {
  //     console.warn(err);
  //   }
  // }, []);

  useEffect(() => {
    // Check if the ref is correctly set
    if (scannerRef.current) {
      console.log("scannerRef.current is valid:", scannerRef.current);

      // Initialize Quagga
      Quagga.init({
        inputStream: {
          name: "Live",
          type: "LiveStream",
          target: scannerRef.current, // Reference to the DOM element
          constraints: {
            facingMode: "environment" // Use the environment camera
          },
        },
        decoder: {
          readers: [
            "code_128_reader",
            "ean_reader",
            "ean_8_reader",
            "code_39_reader",
            "code_39_vin_reader",
            "upc_reader"
          ],
        },
      }, (err) => {
        if (err) {
          console.error("Error initializing Quagga:", err);
          return;
        }
        console.log("Quagga initialized");
        Quagga.start();
        setLoading(false); // Set loading to false once initialized
      });

      // Event handler for barcode detection
      Quagga.onDetected((data) => {
        const { codeResult } = data;
        const url = codeResult.code; // Assuming the scanned code is a URL
        console.log("Scanned code:", url);
        window.location.href = url; // Redirect to the detected URL
      });

      // Cleanup function to stop Quagga on component unmount
      return () => {
        Quagga.stop();
      };
    } else {
      console.error("scannerRef.current is undefined.");
    }
  }, []);


  const [activeTab, setActiveTab] = useState(() =>
    garbageUser?.role === "admin"
      ? "Admin Dashboard"
      : "Garbage Collector"
  );


  useEffect(() => {
    if (garbageUser) {
      setActiveTab(
        garbageUser.role === "admin"
          ? "Admin Dashboard"
          : "Garbage Collector"
      );
    }
    console.log(garbageUser, "garbageUser");
  }, [garbageUser]);

  const renderContent = () => {
    if (garbageUser?.role === "admin") {
      switch (activeTab) {
        case "Admin Dashboard":
          return (
            <>
              {garbageUser && (
                <>

                  <div className="flex justify-center">

                    <div className="w-11/12 sm:w-9/12 md:w-7/12 lg:w-[97%] p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">

                      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 px-6 py-4">
                        {Object.entries(garbageUser)
                          .slice(0, 5)
                          .map(([key, value]) => {
                            // Change 'Created At' key to 'Date Of Onboarding' and format its value
                            const displayKey =
                              key === "created_at"
                                ? "Date Of Onboarding"
                                : key
                                  .replace(/_/g, " ")
                                  .replace(/\b\w/g, (char) =>
                                    char.toUpperCase()
                                  );

                            const displayValue =
                              key === "created_at"
                                ? moment(value).format("MMM DD, YYYY")
                                : value;

                            return (
                              <div
                                key={key}
                                className="flex flex-col md:flex-row items-start md:items-center mb-2"
                              >
                                <span className="text-lg font-semibold text-gray-800 dark:text-white mr-2">
                                  {displayKey}:
                                </span>
                                <span className="text-base text-gray-600 dark:text-gray-300">
                                  {displayValue}
                                </span>
                              </div>
                            );
                          })}
                        {/* Hardcoded Assigned Ward Field */}

                      </div>
                    </div>
                  </div>
                  <h2 className="text-2xl font-bold text-center text-primary m-6">
                    Assigned  Garbage Collector
                  </h2>
                  <div className="my-5 mx-5" style={{ height: 500 }}>


                    {user && (
                      <DataGrid
                        rows={""}
                        columns={columns}
                        getRowId={(row) => row._id}
                        slots={{ toolbar: GridToolbar }}
                      />
                    )}
                  </div>
                </>
              )}
            </>
          );
        case "Analytics / Status":
          return (
            <>
              <AllDetailsInfo />
            </>
          );

        default:
          return null;
      }
    } else if (garbageUser?.role === "garbage_collector") {
      switch (activeTab) {
        case "Garbage Collector":
          return (
            <>
              {garbageUser && (
                <>
                  <div className="flex justify-center">
                    <div className="w-11/12 sm:w-9/12 md:w-7/12 lg:w-[97%] p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 px-6 py-4">
                        {Object.entries(garbageUser)
                          .slice(0, 5)
                          .map(([key, value]) => {
                            // Change 'Created At' key to 'Date Of Onboarding' and format its value
                            const displayKey =
                              key === "created_at"
                                ? "Date Of Onboarding"
                                : key
                                  .replace(/_/g, " ")
                                  .replace(/\b\w/g, (char) =>
                                    char.toUpperCase()
                                  );

                            const displayValue =
                              key === "created_at"
                                ? moment(value).format("MMM DD, YYYY")
                                : value;

                            return (
                              <div
                                key={key}
                                className="flex flex-col md:flex-row items-start md:items-center mb-2"
                              >
                                <span className="text-lg font-semibold text-gray-800 dark:text-white mr-2">
                                  {displayKey}:
                                </span>
                                <span className="text-base text-gray-600 dark:text-gray-300">
                                  {displayValue}
                                </span>
                              </div>
                            );
                          })}
                        {/* Hardcoded Assigned Ward Field */}
                        <div className="flex flex-col md:flex-row items-start md:items-center mb-2">
                          <span className="text-lg font-semibold text-gray-800 dark:text-white mr-2">
                            Assigned Ward :
                          </span>
                          <span className="text-base text-gray-600 dark:text-gray-300">
                            Ward 23
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <h2 className="text-2xl font-bold text-start text-primary m-6">
                    Assigned  User
                  </h2>
                  <div className="my-5 mx-5" style={{ height: 500 }}>
                    {user && (
                      <DataGrid
                        rows={user}
                        columns={columns}
                        getRowId={(row) => row._id}
                        slots={{ toolbar: GridToolbar }}
                        loading={loading}
                      />
                    )}
                  </div>
                </>
              )}
            </>
          );
        case "Analytics / Status":
          return (
            <>
              <AllDetailsInfo />
            </>
          );

        default:
          return null;
      }
    }
  };

  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-full lg:w-1/3 mt-10 m-6 p-5 bg-primary h-11/12 shadow-md lg:rounded ">
        <ul className="list-none p-0 space-y-4">
          {garbageUser?.role === "admin" && (
            <>
              <li
                className={`flex items-center text-white cursor-pointer ${activeTab === "Admin Dashboard" ? "text-gray-300" : ""
                  }`}
                onClick={() => setActiveTab("Admin Dashboard")}
              >
                Admin Dashboard
              </li>
              <li
                className={`flex items-center text-white cursor-pointer ${activeTab === "Analytics / Status" ? "text-gray-300" : ""
                  }`}
                onClick={() => setActiveTab("Analytics / Status")}
              >
                Analytics
              </li>
            </>
          )}

          {garbageUser?.role === "garbage_collector" && (
            <>
              {" "}
              <li
                className={`flex items-center text-white cursor-pointer ${activeTab === "Garbage Collector"
                  ? "text-gray-300"
                  : ""
                  }`}
                onClick={() => setActiveTab("Garbage Collector")}
              >
                Garbage Collector
              </li>
              {/* <li
                className={`flex items-center text-white cursor-pointer ${
                  activeTab === "Analytics / Status" ? "text-gray-300" : ""
                }`}
                onClick={() => setActiveTab("Analytics / Status")}
              >
                Analytics
              </li> */}
            </>
          )}
        </ul>
      </div>

      {/* Main content area */}
      <div className="flex-1 lg:w-3/4 p-4 lg:p-8  m-4 lg:mr-4">
        {/* <h1 className="text-2xl font-bold mb-4 text-center">{activeTab}</h1> */}
        <h1 className="text-2xl font-bold m-4 text-start">Hi, welcome back Mr.{garbageUser?.name}!</h1>
        <div className="text-gray-700">{renderContent()}</div>
        <Barcode />

      </div>
    </div>
  );
};

export default Admin;
