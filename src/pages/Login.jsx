import React, { useState, useEffect } from "react";
import Logo from "assets/logo_dailybox.jpeg";
import "./Login.css";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const Login = () => {
  const [Username, setUsername] = useState();
  const [Password, setPassword] = useState();

  const handleLogin = (event) => {
    event.preventDefault();
    if (Username === "db" && Password === "123") {
      localStorage.setItem("login", "true");
      window.location.href = "/home";
    } else {
      alert("wrong username or password");
    }
    console.log("username", "password");
  };

  // useEffect(() => {
  //   const sudahLogin = localStorage.getItem("login");

  //   console.log(sudahLogin);
  //   if (sudahLogin === "true") {
  //     window.location.href = "/home";
  //   }
  // }, []);

  const handleUsername = (event) => {
    console.log(event);
    setUsername(event.target.value);
  };

  const handlePassword = (event) => {
    console.log(event);
    setPassword(event.target.value);
  };

  return (
    <div className="wrapper-login">
      <img className="logo-login" src={Logo} />
      <div className="form-login">
        <h2>Login</h2>
        <TextField
          label="Username"
          name="Username"
          // defaultValue="Normal"
          variant="outlined"
          size="small"
          value={Username}
          onChange={handleUsername}
          error={Error}
          style={{ width: 300, backgroundColor: "#e6f2ff" }}
        />
        <TextField
          label="Password"
          name="Password"
          // defaultValue="Normal"
          variant="outlined"
          value={Password}
          type={"password"}
          size="small"
          onChange={handlePassword}
          error={Error}
          style={{ width: 300, backgroundColor: "#e6f2ff" }}
        />
        <Button
          onClick={handleLogin}
          style={{ width: 300 }}
          variant="contained"
        >
          Login
        </Button>
      </div>
    </div>
  );
};

export default Login;
