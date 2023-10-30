import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import "../assets/css/general.css";
import { useNavigate } from 'react-router-dom';

const RegisterDialog = ({ show, handleClose }) => {
    const navigate = useNavigate();
    const handleFormSubmit = (event) => {
        event.preventDefault();
        navigate('/HomeUser');
    }
    return (
        <Modal show={show} onHide={handleClose} centered dialogClassName="my-modal" >
            <Modal.Header closeButton>
                <Modal.Title className="Dtitle ms-auto" >Regístrate en BiblioG</Modal.Title>
            </Modal.Header>
            <Modal.Body className="DmodalBody">
                <Form className="DformContainer" onSubmit={handleFormSubmit}>
                    <div className="DformRow">
                        <Form.Group controlId="formBasicName" className="DformGroup">
                            <Form.Label>Nombres</Form.Label>
                            <Form.Control type="text" placeholder="Ingresa tus nombres" className="Dinput" />
                        </Form.Group>

                        <Form.Group controlId="formBasicLastName" className="DformGroup">
                            <Form.Label>Apellidos</Form.Label>
                            <Form.Control type="text" placeholder="Ingresa tus apellidos" className="Dinput" />
                        </Form.Group>
                    </div>

                    <div className="DformRow">
                        <Form.Group controlId="formBasicId" className="DformGroup">
                            <Form.Label>Identificación</Form.Label>
                            <Form.Control type="text" placeholder="Ingresa tu identificación" className="Dinput" />
                        </Form.Group>

                        <Form.Group controlId="formBasicEmail" className="DformGroup">
                            <Form.Label>Correo Electrónico</Form.Label>
                            <Form.Control type="email" placeholder="Ingresa tu correo electrónico" className="Dinput" />
                        </Form.Group>
                    </div>

                    <div className="DformRow">
                        <Form.Group controlId="formBasicPassword" className="DformGroup">
                            <Form.Label>Contraseña</Form.Label>
                            <Form.Control type="password" placeholder="Ingresa tu contraseña" className="Dinput" />
                        </Form.Group>

                        <Form.Group controlId="formBasicConfirmPassword" className="DformGroup">
                            <Form.Label>Confirme Contraseña</Form.Label>
                            <Form.Control type="password" placeholder="Confirma tu contraseña" className="Dinput" />
                        </Form.Group>
                    </div>

                    <div className="DformRow">
                        <Form.Group controlId="formBasicPhone" className="DformGroup">
                            <Form.Label>Teléfono o Celular</Form.Label>
                            <Form.Control type="text" placeholder="Ingresa tu número de teléfono o celular" className="Dinput" />
                        </Form.Group>

                        <Button variant="primary" type="submit" className="Dbutton">
                            Regístrate
                        </Button>
                    </div>
                </Form>
            </Modal.Body>
        </Modal>
    );
};

export default RegisterDialog;

