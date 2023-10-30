import React, { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import LoginDialog from './LoginDialog';
import RegisterDialog from './RegisterDialog'; // Asegúrate de importar el componente de registro

const Cabecera = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);

  const handleShowLogin = () => setShowLogin(true);
  const handleCloseLogin = () => setShowLogin(false);

  const handleShowRegister = () => setShowRegister(true);
  const handleCloseRegister = () => setShowRegister(false);

  return (
    <>
      <Navbar expand="lg" className="bg-whiteOpa">
        <Container fluid>
          <Navbar.Brand href="/" className="logotipo">
            BiblioG
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="navbarScroll" className="justify-content-end">
            <Button variant="outline-success" className="me-2" onClick={handleShowLogin}>
              INICIAR SESION
            </Button>
            <Button variant="outline-danger" className="me-2" onClick={handleShowRegister}>
              REGISTRATE
            </Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <LoginDialog show={showLogin} handleClose={handleCloseLogin} />
      <RegisterDialog show={showRegister} handleClose={handleCloseRegister} />
    </>
  );
}

export default Cabecera;