import React, { useState, useEffect } from "react";
import { Box, Button } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { BsPlusLg } from "react-icons/bs";
import "./Home.css";
import { Link, useNavigate } from "react-router-dom";

const columns = [
  {
    field: "id",
    headerName: "ID",
    headerAlign: "center",
    renderCell: (params) => {
      return <div className="text-id">{params.value}</div>;
    },
    width: 90,
  },
  {
    field: "firstName",
    headerName: "BCA VA Number",
    headerAlign: "center",
    width: 250,
    editable: true,
  },
  {
    field: "lastName",
    headerName: "Outlet Name",
    headerAlign: "center",
    width: 250,
    editable: true,
  },
  {
    field: "age",
    headerName: "Brand",
    headerAlign: "center",
    type: "number",
    renderCell: (params) => {
      return <div className="text-brand">{params.value}</div>;
    },
    width: 250,
    editable: true,
  },
  {
    field: "fullName",
    headerName: "Bank Code",
    headerAlign: "center",
    sortable: true,
    width: 180,
    // valueGetter: (params) =>
    //   `${params.row.firstName || ""} ${params.row.lastName || ""}`,
  },
  {
    field: "",
    headerName: "Action",
    headerAlign: "center",
    renderCell: (params) => {
      return (
        <Link to={"/detail"} className="link-detail">
          Detail
        </Link>
      );
    },
    width: 90,
  },
];

const rows = [
  { id: 1, lastName: "Snow", firstName: "jon", age: 35 },
  { id: 2, lastName: "Lannister", firstName: "Cersei", age: 42 },
  { id: 3, lastName: "Lannister", firstName: "Jaime", age: 45 },
  { id: 4, lastName: "Stark", firstName: "Arya", age: 16 },
  { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null },
  { id: 6, lastName: "Melisandre", firstName: null, age: 150 },
  { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
  { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
  { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
  { id: 10, lastName: "Birong", firstName: "null", age: 22 },
  { id: 4, lastName: "Stark", firstName: "Arya", age: 16 },
  { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null },
  { id: 6, lastName: "Melisandre", firstName: null, age: 150 },
  { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
  { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
  { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
  { id: 10, lastName: "Birong", firstName: "null", age: 22 },
];

const Home = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const status = localStorage.getItem("login");

    console.log(status);
    if (status === "true") {
    } else {
      window.location.href = "/";
    }
  }, []);

  return (
    <>
      <Box sx={{ padding: "3% 13%", height: 500 }}>
        <Button
          onClick={() => navigate("/form")}
          style={{ marginBottom: 15, display: "flex", gap: 5 }}
          variant="contained"
        >
          <BsPlusLg size={15} /> Add Virtual Account
        </Button>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={10}
          rowsPerPageOptions={[5]}
          // autoHeight={true}
          // checkboxSelection
          // disableSelectionOnClick
          experimentalFeatures={{ newEditingApi: true }}
        />
      </Box>
    </>
  );
};

export default Home;
