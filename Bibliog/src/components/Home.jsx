import React from 'react'
import CabeceraAdmin from './CabeceraAdmin';
import Catalogo from './Catalogo';
import Libros from './Libros';
import PrestamosAdmin from './PrestamosAdmin';
import { Routes, Route } from "react-router-dom";
import "../assets/css/general.css";

const Home = () => {
  return (
    <div>
     <CabeceraAdmin />
     <Routes>
        <Route path="Catalogo" element={<Catalogo />}  />
        <Route path="Libros" element={<Libros />}  />
        <Route path="PrestamosAdmin" element={<PrestamosAdmin />}  />
      </Routes>
    </div>
  )
}

export default Home