import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Layout from "layout/Layout";
import Login from "pages/Login";
import Home from "pages/Home";
import Form from "pages/Form";
import Detail from "pages/Detail";

const App = () => {
  // useEffect(() => {
  //   const isLogin = localStorage.getItem("login");

  //   if (isLogin === false) {
  //     window.location.href = "/";
  //   }
  // }, []);

  //   return (
  //     <BrowserRouter>
  //       <Layout />
  //       <Routes>
  //         <Route path="/" element={<Login />} />
  //         <Route
  //           path="/home"
  //           element={
  //             <ProtectRoute>
  //               {" "}
  //               <Home />
  //             </ProtectRoute>
  //           }
  //         />
  //         <Route
  //           path="/form"
  //           element={
  //             <ProtectRoute>
  //               {""}
  //               <Form />
  //             </ProtectRoute>
  //           }
  //         />
  //         <Route
  //           path="/detail"
  //           element={
  //             <ProtectRoute>
  //               {""}
  //               <Detail />
  //             </ProtectRoute>
  //           }
  //         />
  //       </Routes>
  //     </BrowserRouter>
  //   );
  // };

  // const ProtectRoute = (props) => {
  //   const isLogin = localStorage.getItem("login");
  //   if (isLogin === "false") return <Navigate to={"/"} />;
  //   return props.children;
  // };

  // batas //

  const ProtectRoute = () => {
    const isLogin = localStorage.getItem("login");

    if (isLogin === "false") {
      return <Navigate to={"/"} />;
    }
  };

  return (
    <BrowserRouter>
      <Layout />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route
          path="/home"
          element={
            <ProtectRoute>
              <Home />
            </ProtectRoute>
          }
        />
        <Route
          path="/form"
          element={
            <ProtectRoute>
              <Form />
            </ProtectRoute>
          }
        />
        <Route
          path="/detail"
          element={
            <ProtectRoute>
              <Detail />
            </ProtectRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};
export default App;
