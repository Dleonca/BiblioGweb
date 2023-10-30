import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
const CabeceraUser = () => {
  return (
    <Navbar expand="lg" className="bg-white">
      <Container fluid>
        <Navbar.Brand href="#" className="logotipoNegro">
          BiblioG
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="navbarScroll"  className="justify-content-end">
          <Nav>
            <Nav.Link href="#">Catalogo</Nav.Link>
            <Nav.Link href="#">Pretados</Nav.Link>
          </Nav>
          <NavDropdown title="Maria Ankge" id="basic-nav-dropdown">
            <NavDropdown.Item href="#">Cuenta</NavDropdown.Item>
            <NavDropdown.Item href="#">Cerrar Sesion</NavDropdown.Item>
          </NavDropdown>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CabeceraUser;
