"use client";
import React, { useEffect, useState } from "react";
import { fetchAllUserDetails } from "@/helper/apiservices/fetchUserDetails";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";

const GarbageCollectordetails = () => {
  const [user, setUser] = useState([]);
  const [totalUser, setTotalUser] = useState(null);
  const [countUserFalse, setCountUserFalse] = useState(null);
  const [countUserTrue, setCountUserTrue] = useState(null);

  const fetchData = async () => {
    try {
      const response = await fetchAllUserDetails();
      const result = response?.result ?? [];
      const formattedUsers = result.map((user) => ({
        id: user?._id,
        Unique_Property_ID: user?.Unique_Property_ID,
        Mobile_No: user?.Mobile_No,
        Name_of_Localaty: user?.Name_of_Localaty,
        Name_of_Household_Owner: user?.Name_of_Household_Owner,
        Name_of_Household_Owner_Father_Husband:
          user?.Name_of_Household_Owner_Father_Husband,
        House_Type: user?.House_Type,
        Source_of_Water_Supply: user?.Source_of_Water_Supply,
        Objective_of_use: user?.Objective_of_use,
        Use_Self_Rent: user?.Use_Self_Rent,
        Total_Area_Sq_Ft: user?.Total_Area_Sq_Ft,
        Coverd_Area_Sq_Ft_Residential: user?.Coverd_Area_Sq_Ft_Residential,
        Coverd_Area_Sq_Ft_Commercial: user?.Coverd_Area_Sq_Ft_Commercial,
        Uncoverd_Area_Sq_Ft: user?.Uncoverd_Area_Sq_Ft,
        Front_Road_Type_Width_in_Feet: user?.Front_Road_Type_Width_in_Feet,
        Remarks: user?.Remarks,
        Garbage_Collected: user?.Garbage_Collected,
      }));

      setUser(formattedUsers);
      setTotalUser(response.totalUser);
      setCountUserFalse(response.countUserFalse);
      setCountUserTrue(response.countUserTrue);
    } catch (error) {
      console.error("Error fetching user details:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  // Define columns for DataGrid
  const columns = [
    { field: "Unique_Property_ID", headerName: "ID", minWidth: 250 },
    { field: "Name_of_Household_Owner", headerName: "Household Owner", minWidth: 250 },
    { field: "Mobile_No", headerName: "Mobile Number", minWidth: 170 },
    { field: "Name_of_Localaty", headerName: "Locality", minWidth: 170 },
    { field: "Remarks", headerName: "Remarks", minWidth: 250 },
    { field: "Name_of_Household_Owner_Father_Husband", headerName: "Father/Husband Name", minWidth: 250 },
    {
      field: "Garbage_Collected",
      headerName: "Garbage Collected",
      minWidth: 150,
      renderCell: (params) => (
        <div className="cellWithImg">
          {params.row.Garbage_Collected ? "✅" : "❌"}
        </div>
      ),
    },
  ];

  // Calculate percentage values
  const calculatePerFalse = ((countUserFalse / totalUser) * 100).toFixed(2);
  const calculatePerTrue = ((countUserTrue / totalUser) * 100).toFixed(2);

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold text-center text-primary mb-6">
        Garbage collecter Deatils
      </h2>
      <div className="my-5 mx-5" style={{ height: 500 }}>
        <DataGrid
          rows={user}
          columns={columns}
          components={{ Toolbar: GridToolbar }}
        />
      </div>
    </div>
  );
};

export default GarbageCollectordetails;
