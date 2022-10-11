import React from "react";
import Dailybox from "assets/logo_h.png";
import { Link, NavLink } from "react-router-dom";
import "./Layout.css";
import { HiOutlineLogout } from "react-icons/hi";

const Layout = () => {
  const logout = () => {
    localStorage.setItem("login", "false");
    window.location.href = "/";
  };

  const HideButton = () => {
    const checkButton = localStorage.getItem("login");

    if (checkButton === "true") {
      return (
        <a className="link-logout" onClick={() => logout()}>
          Logout
          <HiOutlineLogout />
        </a>
      );
    }
  };

  return (
    <>
      <div className="navbar">
        <Link to={"/home"}>
          <img className="logo" src={Dailybox} />
        </Link>
        <div className="list-navbar">
          <HideButton />
        </div>
      </div>
    </>
  );
};

export default Layout;
