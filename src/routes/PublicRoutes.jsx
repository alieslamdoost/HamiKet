import React from "react";
import { Router, Routes, Route } from "react-router-dom";
import Login from "../pages/Login/Login";

function PublicRoutes(props) {
  return (
      <Routes>
        <Route path="/" element={<Login />} />
      </Routes>
  );
}

export default PublicRoutes;
