import React from "react";
import "../assets/css/general.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
const CabeceraUser = () => {
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
          <NavLink  to='HomeUser/Catalogo' className="me-4">Catalogo</NavLink >
          <Nav.Link href="#" className="me-4">Pretados</Nav.Link>
          <NavDropdown title="Maria Ankge" id="basic-nav-dropdown" className="me-5">
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
