import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import Libro from "../assets/images/libro.jpg";
const Catalogo = () => {
  return (
    <div className="catalogoLibros">
      <div className="filtro">
        <input type="text" id="filtroBusqueda" className="form-control" placeholder="Filtro de Busqueda"/>
        <button className="btn search" type="submit"> </button>
      </div>
      <div className="libros">
        <Card className="tarjeta">
          <Card.Title className="cardCT">Cada historia cuenta</Card.Title>
          <Card.Img className="cardCI" variant="top" src={Libro} />
          <Button className="cardCB" variant="primary">
            Ver más
          </Button>
        </Card>
        <Card className="tarjeta">
          <Card.Title className="cardCT">Cada historia cuenta</Card.Title>
          <Card.Img className="cardCI" variant="top" src={Libro} />
          <Button className="cardCB" variant="primary">
            Ver más
          </Button>
        </Card>
        <Card className="tarjeta">
          <Card.Title className="cardCT">Cada historia cuenta</Card.Title>
          <Card.Img className="cardCI" variant="top" src={Libro} />
          <Button className="cardCB" variant="primary">
            Ver más
          </Button>
        </Card>
        <Card className="tarjeta">
          <Card.Title className="cardCT">Cada historia cuenta</Card.Title>
          <Card.Img className="cardCI" variant="top" src={Libro} />
          <Button className="cardCB" variant="primary">
            Ver más
          </Button>
        </Card>
        <Card className="tarjeta">
          <Card.Title className="cardCT">Cada historia cuenta</Card.Title>
          <Card.Img className="cardCI" variant="top" src={Libro} />
          <Button className="cardCB" variant="primary">
            Ver más
          </Button>
        </Card>
        <Card className="tarjeta">
          <Card.Title className="cardCT">Cada historia cuenta</Card.Title>
          <Card.Img className="cardCI" variant="top" src={Libro} />
          <Button className="cardCB" variant="primary">
            Ver más
          </Button>
        </Card>
        <Card className="tarjeta">
          <Card.Title className="cardCT">Cada historia cuenta</Card.Title>
          <Card.Img className="cardCI" variant="top" src={Libro} />
          <Button className="cardCB" variant="primary">
            Ver más
          </Button>
        </Card>
      </div>
    </div>
  );
};

export default Catalogo;
