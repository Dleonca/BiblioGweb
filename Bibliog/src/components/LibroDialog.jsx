import React, { useState, useEffect } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import "../assets/css/general.css";
import { useNavigate } from 'react-router-dom';

const LibroDialog = ({ show, handleClose, libro }) => {
    const [showPwd, setShowPwd] = useState(false)
    const libroc = libro.data;
    console.log('libro completo:'+libroc);

    return (
        <Modal show={show} onHide={handleClose} centered>
            <Modal.Header closeButton>
                <Modal.Title className="title ms-auto">Libro </Modal.Title>
            </Modal.Header>
            <Modal.Body className="modalBody">
                <div className="center">
                    <Form.Group controlId="libroinfo" style={{ width: '100%' }}  >
                        <Form.Label>Titulo:</Form.Label>
                    </Form.Group>
                    <Form.Group controlId="libroinfo" style={{ width: '100%' }}  >
                        <Form.Label>Autor:</Form.Label>
                        <Form.Label>Genero:</Form.Label>
                        <Form.Label>Publicacion:</Form.Label>
                    </Form.Group>
                    <Form.Group controlId="libroinfo" style={{ width: '100%' }}  >
                        <Form.Label>Descripcion:</Form.Label>
                    </Form.Group>

                    <Button variant="primary" type="submit" className="button" style={{ width: '100%' }} >
                        Reservar
                    </Button>
                </div>
            </Modal.Body>
        </Modal>
    )
}

export default LibroDialog