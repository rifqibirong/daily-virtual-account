import React from "react";
import Logo from "assets/logo_dailybox.jpeg";
import "./Login.css";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const Login = () => {
  return (
    <div className="wrapper-login">
      <img className="logo-login" src={Logo} />
      <div className="form-login">
        <h2>Login</h2>
        <TextField
          label="Username"
          id="filled-size-normal"
          // defaultValue="Normal"
          variant="outlined"
          size="small"
          style={{ width: 300 }}
        />
        <TextField
          label="Password"
          id="filled-size-normal"
          // defaultValue="Normal"
          variant="outlined"
          type={"password"}
          size="small"
          style={{ width: 300 }}
        />
        <Button style={{ width: 300 }} variant="contained">
          Login
        </Button>
      </div>
    </div>
  );
};

export default Login;
