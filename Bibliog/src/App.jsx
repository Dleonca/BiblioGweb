import "./App.css";
import Inicio from "./components/Inicio";
import Cabecera from "./components/Cabecera";
import Catalogo from "./components/Catalogo";
import HomeUser from "./components/HomeUser";
import React from "react";
import "./assets/css/general.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="img-body">
      <Router>
        <Cabecera />
        <Routes>
          <Route path="/" element={<Inicio />}></Route>
          <Route path="/HomeUser" element={<HomeUser />}></Route>
          <Route path="/Catalogo" element={<Catalogo />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
