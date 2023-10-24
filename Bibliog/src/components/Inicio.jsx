import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import "../assets/css/general.css";
const Inicio = () => {
  return (
    <div className="img-body">
      <Navbar expand="lg" className="bg-whiteOpa">
        <Container fluid>
          <Navbar.Brand href="#" className="logotipo">
            BiblioG
          </Navbar.Brand>
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
      <main className="mainInicio">
        <h1 className="fw-bold">¿QUE VAS A LEER HOY?</h1>
        <p className="fs-2">
          Explora una inmensa cantidad de libros de todo el mundo y enriquece tu
          vida con nuevas perspectivas.
        </p>
        <p className="fs-2">!Prestar libros nunca ha sido tan fácil como con Bibliog!.</p>
      </main>
    </div>
  );
};

export default Inicio;
