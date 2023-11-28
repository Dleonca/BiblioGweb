import React from "react";
import "../assets/css/general.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { useNavigate, NavLink } from "react-router-dom";

const CabeceraUser = () => {
  const navigate = useNavigate();
  const handleFormSubmit = (event) => {
    event.preventDefault();
    localStorage.removeItem("datosUsuario");
    navigate("/");
  };
  var datosGuardados = localStorage.getItem("datosUsuario");

  // Convertir la cadena JSON de nuevo a un objeto
  var objetoRecuperado = JSON.parse(datosGuardados);
  var NombreCompleto = objetoRecuperado.nombre + " " + objetoRecuperado.apellidos;

  return (
    <Navbar expand="lg" className=" bordeNav bg-white">
      <Container fluid>
        <Navbar.Brand href="#" className="logotipoNegro">
          BiblioG
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="navbarScroll" className="justify-content-end">
          <NavLink to='/HomeUser/Catalogo' className="me-4 irA">Catalogo</NavLink >
          <NavLink to='/HomeUser/PrestamosUser' className="me-4 irA">Prestamos</NavLink>
          <NavDropdown name="nombre" title={NombreCompleto} id="basic-nav-dropdown" className="me-5 irA">
            <NavDropdown.Item href="#">Cuenta</NavDropdown.Item>
            <NavDropdown.Item href="#" onClick={handleFormSubmit}>
              Cerrar Sesion
            </NavDropdown.Item>
          </NavDropdown>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CabeceraUser;
