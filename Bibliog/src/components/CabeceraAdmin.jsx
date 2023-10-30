import React from 'react'
import "../assets/css/general.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { useNavigate, NavLink } from "react-router-dom";
const CabeceraAdmin = () => {
  const navigate = useNavigate();
  const handleFormSubmit = (event) => {
    event.preventDefault();
    navigate("/");
  };
  return (
    <Navbar expand="lg" className="bg-white">
    <Container fluid>
      <Navbar.Brand href="#" className="logotipoNegro">
        BiblioG
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="navbarScroll" className="justify-content-end">
        <NavLink to='Catalogo' className="me-4">Catalogo</NavLink >
        <NavLink to='Libros' className="me-4">Libros</NavLink>
        <NavLink to='PrestamosAdmin' className="me-4">Pretamos</NavLink>
        <NavDropdown title="Administrador" id="basic-nav-dropdown" className="me-5">
          <NavDropdown.Item href="#">Cuenta</NavDropdown.Item>
          <NavDropdown.Item href="#" onClick={handleFormSubmit}>
            Cerrar Sesion
          </NavDropdown.Item>
        </NavDropdown>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default CabeceraAdmin