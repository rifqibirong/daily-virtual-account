import React from "react";
import Dailybox from "assets/logo_h.png";
import { NavLink } from "react-router-dom";
import './Layout.css'
import {HiOutlineLogout} from 'react-icons/hi'

const Layout = () => {
  return (
    <>
      <div className="navbar">
        <div>
        <img className="logo" src={Dailybox} />
        </div>
        <div className="list-navbar">
          <NavLink className="link-logout" to={'/'}>Logout<HiOutlineLogout/></NavLink>
          {/* <NavLink className="link-login" to={'/login'}>Login</NavLink> */}
        </div>
      </div>
    </>
  );
};

export default Layout;
