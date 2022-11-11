import React from "react";
import TextField from "@mui/material/TextField";
import "./Form.css";
import Button from "@mui/material/Button";
import Logo2 from "assets/singapore-db_white-removebg-preview.png";

import Box from "@mui/material/Box";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import BrandingWatermarkIcon from "@mui/icons-material/BrandingWatermark";
import CodeIcon from "@mui/icons-material/Code";
import StoreIcon from "@mui/icons-material/Store";
import { useParams } from "react-router-dom";

const Form = () => {
  const params = useParams();
  const id = params.id;
  return (
    // <div className="wrapper-form">
    //   <div className="form-va">
    //     {/* <img className="logo-login" src={Logo} /> */}
    //     <h2>Create Virtual Account</h2>
    //     <TextField
    //       label="BCA VA Number"
    //       id="filled-size-normal"
    //       // defaultValue="Normal"
    //       variant="outlined"
    //       size="small"
    //     />
    //     <TextField
    //       label="Outlet Name"
    //       id="filled-size-normal"
    //       // defaultValue="Normal"
    //       variant="outlined"
    //       size="small"
    //     />
    //     <TextField
    //       label="Brand"
    //       id="filled-size-normal"
    //       // defaultValue="Normal"
    //       variant="outlined"
    //       size="small"
    //     />
    //     <TextField
    //       label="Bank Code"
    //       id="filled-size-normal"
    //       // defaultValue="Normal"
    //       variant="outlined"
    //       size="small"
    //     />
    //     <Button id="btn-form" variant="contained">
    //       Add
    //     </Button>
    //   </div>
    //   <div className="wrap-icon">
    //     <img src={Logo} />
    //   </div>
    // </div>

    <div className="wrapper-form">
      <Box className="form-va" sx={{ "& > :not(style)": { m: 1 } }}>
        <div className="h2">
          <h2>Create Virtual Account</h2>
        </div>
        <Box sx={{ display: "flex", alignItems: "flex-end" }}>
          <AccountBalanceIcon
            sx={{ color: "action.active", mr: 0.5, my: 0.5 }}
          />
          <TextField
            id="filled-size-normal"
            label="BCA VA Number"
            variant="standard"
            type={"number"}
          />
        </Box>
        <Box sx={{ display: "flex", alignItems: "flex-end" }}>
          <StoreIcon sx={{ color: "action.active", mr: 0.5, my: 0.5 }} />
          <TextField
            id="filled-size-normal"
            label="Outlet Name"
            variant="standard"
          />
        </Box>
        <Box sx={{ display: "flex", alignItems: "flex-end" }}>
          <BrandingWatermarkIcon
            sx={{ color: "action.active", mr: 0.5, my: 0.5 }}
          />
          <TextField id="filled-size-normal" label="Brand" variant="standard" />
        </Box>
        <Box sx={{ display: "flex", alignItems: "flex-end" }}>
          <CodeIcon sx={{ color: "action.active", mr: 0.5, my: 0.5 }} />
          <TextField
            id="filled-size-normal"
            label="Bank Code"
            variant="standard"
          />
        </Box>
        <Button id="btn-form" variant="contained">
          Add
        </Button>
      </Box>
      <img className="logo-form" src={Logo2} />
    </div>
  );
};

export default Form;
