import React from "react";
import CabeceraUser from "./CabeceraUser";
import Catalogo from "./Catalogo";
import PrestamosUser from "./PrestamosUser";
import { Routes, Route } from "react-router-dom";
import "../assets/css/general.css";

function HomeUser() {
  return (
    <div>
     <CabeceraUser />
     <Routes>
        <Route path="" element={<Catalogo />} />
        <Route path="Catalogo" element={<Catalogo />}  />
        <Route path="PrestamosUser" element={<PrestamosUser />} />
      </Routes>
    </div>
  );
}

export default HomeUser;
