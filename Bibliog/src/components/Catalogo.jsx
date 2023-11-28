import React, { useState, useEffect } from 'react';
import Button from "react-bootstrap/Button";
//import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
//import Libro from "../assets/images/libro.jpg";
import LibroDialog from './LibroDialog';
const Catalogo = () => {
  const [showLibroDialog, setShowLoginDialog] = useState(false);
  const [selectedLibroId, setSelectedLibroId] = useState(null); // Nuevo estado para almacenar la id_libro seleccionada

  const handleShowLD = (idLibro) => {
    setSelectedLibroId(idLibro); // Almacena la id_libro seleccionada
    console.log(idLibro); // Imprimir la id_libro seleccionada
    setShowLoginDialog(true);
  };
  const handleCloseLD = () => {
    setSelectedLibroId(null); // Limpia la id_libro al cerrar el diálogo
    setShowLoginDialog(false);
  };

  const [verlibros, setVerlibros] = useState([]);

  useEffect(() => {
    const apiUrl = 'http://localhost/BiblioG/getLibros.php';

    const fetchData = async () => {
      try {
        const response = await fetch(apiUrl, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': 'e1f602bf73cc96f53c10bb7f7953a438fb7b3c0a'
          }
        });
        const data = await response.json();
        setVerlibros(data.data);
        console.log(verlibros)
      } catch (error) {
        console.error('Error al obtener datos:', error);
      }
    };

    fetchData();
  }, []); // La dependencia vacía asegura que se ejecute solo una vez al montar el componente.
  return (
    <div className="catalogoLibros">
      <div className="filtro">
        <input type="text" id="filtroBusqueda" className="form-control" placeholder="Filtro de Busqueda" />
        <button className="btn search" type="submit"> </button>
      </div>
      <div className="libros">
        {verlibros.map((libro) => (
          <Card className="tarjeta" key={libro.id_libro}>
            <Card.Title className="cardCT">{libro.titulo}</Card.Title>
            <Card.Img className="cardCI" variant="top" src={libro.imagen} alt={libro.titulo} />
            <Button className="cardCB" variant="primary" onClick={() => handleShowLD(libro.id_libro)}>
              Ver más
            </Button>

          </Card>
        ))}
      </div>
      {showLibroDialog && (
        <LibroDialog show={showLibroDialog} handleClose={handleCloseLD} selectedLibroId={selectedLibroId} />
      )}
    </div>
  );
};

export default Catalogo;
