import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "layout/Layout";
import Login from "pages/Login";
import Home from "pages/Home";
import Form from "pages/Form";

const App = () => {
  return (
    <BrowserRouter>
      <Layout />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route path="/form" element={<Form />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
