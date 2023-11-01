import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Cabecera from "./Cabecera";
import { NavLink } from "react-router-dom";
import "../assets/css/general.css";

const Inicio = () => {
  return (
    <div className="img-body">
      <Cabecera />
    <main className="mainInicio">
      <h1 className="fw-bold">¿QUE VAS A LEER HOY?</h1>
      <p className="fs-2">
        Explora una inmensa cantidad de libros de todo el mundo y enriquece tu
        vida con nuevas perspectivas.
      </p>
      <p className="fs-2">
        !Prestar libros nunca ha sido tan fácil como con Bibliog!.
      </p>
      <NavLink className="btn btn-primary" to="Catalogo">
        Explora Nuestro Catalogo
      </NavLink>
    </main>
    </div>
  );
};

export default Inicio;
