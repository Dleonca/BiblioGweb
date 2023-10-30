import "./App.css";
import Inicio from "./components/Inicio";
import Catalogo from "./components/Catalogo";
import HomeUser from "./components/HomeUser";
import Home from "./components/Home";
import React from "react";
import "./assets/css/general.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
   
      <Router>
        <Routes>
          <Route path="/" element={<Inicio />}></Route>
          <Route path="Catalogo" element={<Catalogo />}></Route>
          <Route path="HomeUser/*" element={<HomeUser />}></Route>
          <Route path="Home/*" element={<Home />}></Route>
        </Routes>
      </Router>
  );
}

export default App;
