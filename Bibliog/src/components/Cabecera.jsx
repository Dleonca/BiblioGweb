import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import "../assets/css/general.css";
import {Link} from "react-router-dom";
const Cabecera = () => {
  return (
    <Navbar expand="lg" className="bg-whiteOpa">
        <Container fluid>
          <Link to="/" className="logotipo" exact>
            BiblioG
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="navbarScroll" className="justify-content-end">
            <Button variant="outline-success" className="me-2">
              INICIAR SESION
            </Button>
            <Button variant="outline-danger" className="me-2">
              REGISTRATE
            </Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>
  )
}

export default Cabecera