import React from "react";
import { Router, Routes, Route } from "react-router-dom";
import Login from "../pages/Login/Login";
import Panel from "../pages/Panel/Panel"
function PublicRoutes(props) {
  return (
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/panel" element={<Panel/>}/>
      </Routes>
  );
}

export default PublicRoutes;
