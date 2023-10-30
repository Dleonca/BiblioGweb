import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import "../assets/css/general.css";
import { useNavigate } from 'react-router-dom';

const LoginDialog = ({ show, handleClose }) => {
    const navigate = useNavigate();
    const handleFormSubmit = (event) => {
        event.preventDefault();
        navigate('Home');
    }
    return (
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title className="title ms-auto">Iniciar sesión</Modal.Title>
        </Modal.Header>
        <Modal.Body className="modalBody">
          <div className="center">
            <Form.Group controlId="formBasicEmail" style={{ width: '100%' }}>
              <Form.Label>Correo electrónico</Form.Label>
              <Form.Control type="email" placeholder="Ingrese su correo electrónico" className="input" style={{ width: '100%' }} />
            </Form.Group>
  
            <Form.Group controlId="formBasicPassword" style={{ width: '100%' }}>
              <Form.Label>Contraseña</Form.Label>
              <Form.Control type="password" placeholder="Contraseña" className="input" style={{ width: '100%' }} />
            </Form.Group>
  
            <p className="forgotPassword">
              <a href="#">¿Olvidaste tu contraseña?</a>
            </p>
  
            <Button variant="primary" type="submit" className="button" style={{ width: '100%' }} onClick={handleFormSubmit}>
              Iniciar sesión
            </Button>
          </div>
        </Modal.Body>
      </Modal>
    );
  };
  
  export default LoginDialog;