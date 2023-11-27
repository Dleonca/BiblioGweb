import React, { useState, useEffect } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import "../assets/css/general.css";
import { useNavigate } from 'react-router-dom';

const LibroDialog = ({ show, handleClose, selectedLibroId }) => {
    const [showPwd, setShowPwd] = useState(false)
    console.log(selectedLibroId)
    const [libroDetails, setLibroDetails] = useState(null);

    useEffect(() => {
      const fetchLibroDetails = async () => {
        try {
          const response = await fetch(`http://localhost/BiblioG/getLibro.php/${selectedLibroId}`, {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': 'e1f602bf73cc96f53c10bb7f7953a438fb7b3c0a'
            }
          });
          const responseData = await response.json(); // Leer el cuerpo solo una vez
          console.log(responseData);
          // Acceder a los datos del usuario creado
          const librounico = responseData.data;
          if (responseData.data && Object.keys(responseData.data).length > 0) {
            setLibroDetails(librounico);
          } else {
            console.error('Error al obtener detalles del libro:', response.statusText);
          }
        } catch (error) {
          console.error('Error en la solicitud:', error);
        }
      };
  
      if (show && selectedLibroId) {
        fetchLibroDetails();
      }
    }, [show, selectedLibroId]);

    return (
        <Modal show={show} onHide={handleClose} centered>
            <Modal.Header closeButton>
                <Modal.Title className="title ms-auto">Libro </Modal.Title>
            </Modal.Header>
            <Modal.Body className="modalBody">
            {libroDetails ? (
                <div className="center">
                    <Form.Group controlId="libroinfo" style={{ width: '100%' }}  >
                        <Form.Label>Titulo:</Form.Label>
                        <Form.Label>{libroDetails.titulo}</Form.Label>
                    </Form.Group>
                    <Form.Group controlId="libroinfo" style={{ width: '100%' }}  >
                        <Form.Label>Autor:{libroDetails.autor},</Form.Label>
                        <Form.Label> Genero:{libroDetails.genero},</Form.Label>
                        <Form.Label> Publicado:{libroDetails.publicacion}.</Form.Label>
                    </Form.Group>
                    <Form.Group controlId="libroinfo" style={{ width: '100%' }}  >
                        <Form.Label>Descripcion:</Form.Label>
                    </Form.Group>
                    <Form.Group controlId="libroinfo" style={{ width: '100%' }}  >
                        <Form.Label>{libroDetails.descripcion}</Form.Label>
                    </Form.Group>
                    <Button variant="primary" type="submit" className="button" style={{ width: '100%' }} >
                        Reservar
                    </Button>
                </div>
                  ) : (
                    <p>Cargando detalles del libro...</p>
                  )}
            </Modal.Body>
        </Modal>
    )
}

export default LibroDialog