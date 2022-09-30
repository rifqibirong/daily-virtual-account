import * as React from "react";
import { Box, Button } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { BsPlusLg } from "react-icons/bs";
import "./Home.css";
import { render } from "react-dom";

const columns = [
  {
    field: "id",
    headerName: "ID",
    headerAlign: "center",
    renderCell: (params) => {
      return (
        <div style={{ textAlign: "center", width: "100%" }}>{params.value}</div>
      );
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
      return (
        <div style={{ textAlign: "center", width: "100%" }}>{params.value}</div>
      );
    },
    width: 250,
    editable: true,
  },
  {
    field: "fullName",
    headerName: "Bank Code",
    headerAlign: "center",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 250,
    valueGetter: (params) =>
      `${params.row.firstName || ""} ${params.row.lastName || ""}`,
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
];

const Home = () => {
  return (
    <>
      <Box sx={{ height: 500, padding: "3% 13%" }}>
        <Button
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
          // checkboxSelection
          disableSelectionOnClick
          experimentalFeatures={{ newEditingApi: true }}
        />
      </Box>
    </>
  );
};

export default Home;
