import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Libro from "../assets/images/libro.jpg"
const Catalogo = () => {
  return (
    <div className="catalogoLibros">
      <div className="filtro"></div>
      <div className="libros">
        <Card className="tarjeta" >
          <Card.Title  className="cardCT">Cada historia cuenta</Card.Title>
          <Card.Img className="cardCI" variant="top" src={Libro} />
          <Button className="cardCB" variant="primary">Ver más</Button>
        </Card>
      </div>
    </div>
  );
};

export default Catalogo;
