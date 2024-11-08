"use client";
import React, { useEffect, useState } from "react";
import { dummytender } from "@/helper/dummyTender";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";

const Tender = () => {

  const columns = [
    {
      field: "tenderId",
      headerName: "TenderId",
      minWidth: 150,
    },
    {
      field: "department",
      headerName: "Department",
      minWidth: 300,
    },
    {
      field: "description",
      headerName: "Description",
      minWidth: 450,
    },
    {
      field: "closingDate",
      headerName: "ClosingDate",
      minWidth: 170,
    },
    {
      field: "budget",
      headerName: "Budget",
      minWidth: 150,
    },
  ];


  return (
    <>
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold text-center text-primary m-6">
        E-Tender Details
      </h2>
      <div className="my-5 mx-auto" style={{ height: 500 }}>
          <DataGrid
            rows={dummytender}
            columns={columns}
            getRowId={(row) => row.tenderId}
            slots={{ toolbar: GridToolbar }}
          />
      </div>
      </div>
    </>
  );
};

export default Tender;
