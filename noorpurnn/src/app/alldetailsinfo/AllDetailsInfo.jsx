"use client";
import React, { useEffect, useState } from "react";
import { fetchAllUserDetails } from "@/helper/apiservices/fetchUserDetails";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";

const CircularProgressBarInNumber = ({ number, color, totalUser }) => {
  const r = 60; // radius of the circle
  const circ = 2 * Math.PI * r; // circumference of the circle
  const strokePct = ((totalUser - number) * circ) / totalUser; // how much of the circumference should be visible

  return (
    <svg width="150" height="150" viewBox="0 0 150 150">
      <circle
        cx="75"
        cy="75"
        r={r}
        fill="transparent"
        stroke="#e6e6e6"
        strokeWidth="15"
        strokeDasharray={circ}
        strokeDashoffset="0"
      />
      <circle
        cx="75"
        cy="75"
        r={r}
        fill="transparent"
        stroke={color}
        strokeWidth="15"
        strokeDasharray={circ}
        strokeDashoffset={strokePct.toString()}
        strokeLinecap="round"
        transform="rotate(-90 75 75)"
      />
      <text
        x="50%"
        y="50%"
        dy=".3em"
        textAnchor="middle"
        fontSize="24"
        fill="#333"
      >
        {number}
      </text>
    </svg>
  );
};

const CircularProgressBar = ({ percentage, color }) => {
  const r = 60; // radius of the circle
  const circ = 2 * Math.PI * r; // circumference of the circle
  const strokePct = ((100 - percentage) * circ) / 100; // how much of the circumference should be visible

  return (
    <svg width="150" height="150" viewBox="0 0 150 150">
      <circle
        cx="75"
        cy="75"
        r={r}
        fill="transparent"
        stroke="#e6e6e6"
        strokeWidth="15"
        strokeDasharray={circ}
        strokeDashoffset="0"
      />
      <circle
        cx="75"
        cy="75"
        r={r}
        fill="transparent"
        stroke={color}
        strokeWidth="15"
        strokeDasharray={circ}
        strokeDashoffset={strokePct.toString()}
        strokeLinecap="round"
        transform="rotate(-90 75 75)"
      />
      <text
        x="50%"
        y="50%"
        dy=".3em"
        textAnchor="middle"
        fontSize="24"
        fill="#333"
      >
        {percentage}%
      </text>
    </svg>
  );
};

const AllDetailsInfo = () => {
  const [user, setUser] = useState([]);
  const [totalUser, setTotalUser] = useState(null);
  const [countUserFalse, setCountUserFalse] = useState(null);
  const [countUserTrue, setCountUserTrue] = useState(null);

  const fetchData = async () => {
    try {
      const response = await fetchAllUserDetails();
      setUser(response.result);
      setTotalUser(response.totalUser);
      setCountUserFalse(response.countUserFalse);
      setCountUserTrue(response.countUserTrue);
      return response;
    } catch (error) {
      console.error("Error fetching user details:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  console.log({ countUserTrue });

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
      // renderCell: (params) => {
      //   console.log(params, "helllllll");
      // },
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
      // renderCell: (params) => {
      //   console.log(params, "helllllll");
      // },
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
      minWidth: 100
    },
    {
      field: "Name_of_Household_Owner_Father_Husband",
      headerName: "Name of Household Owner Father/Husband",
      minWidth: 250,
      // renderCell: (params) => {
      //   console.log(params, "helllllll");
      // },
    },
    {
      field: "Garbage_Collected",
      headerName: "Garbage Collected",
      minWidth: 150,
      renderCell: (params) => {
        // console.log(params.row.Garbage_Collected, "helllllll");
        return (
          <div className="cellWithImg">
            {params.row.Garbage_Collected ? "✅" : "❌"}
          </div>
        );
      },
    },
  ];

  const calculatePerFalse = ((countUserFalse / totalUser) * 100).toFixed(2);
  const calculatePerTrue = ((countUserTrue / totalUser) * 100).toFixed(2);
  const calculatePerTotle = ((totalUser / totalUser) * 100).toFixed(2);

  return (
    <>
      <div className="container mx-auto p-4">
        {/* <h2 className="text-2xl font-bold text-center text-primary mb-6">
          Status Of Garbage
        </h2> */}

        <div className="flex justify-center md:justify-evenly  flex-wrap mb-10 gap-5">
          <div>
            <CircularProgressBar
              percentage={calculatePerTrue}
              color="#7CFC00"
            />
            <p className="text-sm text-gray-500">Garbage Collected</p>
          </div>
          <div>
            <CircularProgressBar
              percentage={calculatePerTotle}
              color="#191970"
            />
            <p className="text-sm text-center text-gray-500">Total User</p>
          </div>
          <div>
            <CircularProgressBar
              percentage={calculatePerFalse}
              color="#FF4500"
            />
            <p className="text-sm text-gray-500">Garbage Not Collected</p>
          </div>
        </div>
      </div>
      <div className="container mx-auto p-4">
        {/* <h2 className="text-2xl font-bold text-center text-primary mb-6">
          Status Of Garbage per houses
        </h2> */}

        <div className="flex justify-center md:justify-evenly flex-wrap  mb-10 gap-5">
          <div className="text-center">
            <CircularProgressBarInNumber
              number={countUserTrue}
              totalUser={totalUser}
              color="#7CFC00"
            />
            <p className="text-sm text-gray-500">House Attended</p>
          </div>
          <div className="text-center">
            <CircularProgressBarInNumber number={totalUser} color="#191970" />
            <p className="text-sm text-center text-gray-500">Total House</p>
          </div>
          <div className="text-center">
            <CircularProgressBarInNumber
              number={countUserFalse}
              totalUser={totalUser}
              color="#FF4500"
            />
            <p className="text-sm text-gray-500">Houses Left</p>
          </div>
        </div>
      </div>
      {/* <h2 className="text-2xl font-bold text-center text-primary m-6">
        All User Details
      </h2>
      <div className="my-5 mx-5" style={{ height: 500 }}>
        {user && (
          <DataGrid
            rows={user}
            columns={columns}
            getRowId={(row) => row._id}
            slots={{ toolbar: GridToolbar }}
          />
        )}
      </div> */}
    </>
  );

};

export default AllDetailsInfo;
