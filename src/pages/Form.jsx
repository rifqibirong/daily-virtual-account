import React from "react";
import TextField from "@mui/material/TextField";
import "./Form.css";
import Button from "@mui/material/Button";
import Logo from "assets/logo_dailybox.jpeg";

const Form = () => {
  return (
    <div className="wrapper-form">
      <div className="form-va">
        <img className="logo-login" src={Logo} />
        <h2>FORM</h2>
        <TextField
          label="BCA VA Number"
          id="filled-size-normal"
          // defaultValue="Normal"
          variant="outlined"
          size="small"
          style={{ width: 300 }}
        />
        <TextField
          label="Outlet Name"
          id="filled-size-normal"
          // defaultValue="Normal"
          variant="outlined"
          size="small"
          style={{ width: 300 }}
        />
        <TextField
          label="Brand"
          id="filled-size-normal"
          // defaultValue="Normal"
          variant="outlined"
          size="small"
          style={{ width: 300 }}
        />
        <TextField
          label="Bank Code"
          id="filled-size-normal"
          // defaultValue="Normal"
          variant="outlined"
          size="small"
          style={{ width: 300 }}
        />
        <Button style={{ width: 300 }} variant="contained">
          Add
        </Button>
      </div>
    </div>
  );
};

export default Form;
