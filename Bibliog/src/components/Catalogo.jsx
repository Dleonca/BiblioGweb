import React, { useState, useEffect } from 'react';
import Button from "react-bootstrap/Button";
//import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
//import Libro from "../assets/images/libro.jpg";
import LibroDialog from './LibroDialog';
const Catalogo = () => {
  const [showLibroDialog, setShowLoginDialog] = useState(false);

  const handleShowLD= () => setShowLoginDialog(true);
  const handleCloseLD = () => setShowLoginDialog(false);

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
          <Card className="tarjeta">
            <Card.Title className="cardCT">{libro.titulo}</Card.Title>
            <Card.Img className="cardCI" variant="top" src={libro.imagen} />
            <Button className="cardCB" variant="primary" onClick={handleShowLD}>
              Ver más
            </Button>

          </Card>
        ))}
      </div>
      <LibroDialog show={showLibroDialog} handleClose={handleCloseLD} libro={verlibros}/>
    </div>
  );
};

export default Catalogo;
