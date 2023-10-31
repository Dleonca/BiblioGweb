import React from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
const Libros = () => {
  return (
    <div className="m-5">
      <div className="row">
        <Form className="d-flex justify-content-end">
          <div className="col-3">
            <Form.Group
              className="m-1 col-12 d-flex flex-row justify-content-around"
              controlId="exampleForm.ControlInput1"
            >
              <Col xs={6} md={4} style={{ height: "170px" }}>
                <Image src="#" thumbnail />
              </Col>
            </Form.Group>
            <Form.Group
              className="m-1 col-12 d-flex flex-row justify-content-around"
              controlId="exampleForm.ControlInput1"
            >
              <Button
                variant="primary"
                type="submit"
                className="m-1"
                style={{ width: "80%" }}
              >
                Subir Imagen
              </Button>
            </Form.Group>
          </div>
          <div className="col-9">
            <Form.Group
              className="m-1 col-12 d-flex flex-row justify-content-around"
              controlId="exampleForm.ControlInput1"
            >
              <Form.Control
                type="text"
                style={{ width: "32%" }}
                placeholder="ID Libro"
              />
              <Form.Control
                type="text"
                style={{ width: "32%" }}
                placeholder="Titulo"
              />
              <Form.Control
                type="text"
                style={{ width: "32%" }}
                placeholder="Autor"
              />
            </Form.Group>
            <Form.Group
              className="m-1 col-12 d-flex flex-row justify-content-around"
              controlId="exampleForm.ControlInput1"
            >
              <Form.Control
                type="date"
                style={{ width: "32%" }}
                placeholder="Publicacion"
              />
              <Form.Control
                type="text"
                style={{ width: "32%" }}
                placeholder="Genero"
              />
              <Form.Control
                type="text"
                style={{ width: "32%" }}
                placeholder="Cantidad"
              />
            </Form.Group>
            <Form.Group
              className="m-1 col-12 d-flex flex-row justify-content-around"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Control
                as="textarea"
                rows={3}
                style={{ width: "99%" }}
                placeholder="Agrega una descripcion..."
              />
            </Form.Group>
            <Button
              variant="primary"
              type="submit"
              className=" btn col-3 m-1"
              style={{ height: "38px" }}
            >
              Crear Libro
            </Button>
          </div>
        </Form>
      </div>
      <br />
      <div className="row">
        <div className="col-12">
          <Form className="d-flex justify-content-end">
            <Form.Group
              className="m-1 col-4"
              controlId="exampleForm.ControlInput1"
            >
              <Form.Control type="text" placeholder="Id o nombre del libro" />
            </Form.Group>
            <Button
              variant="primary"
              type="submit"
              className=" btn col-3 m-1"
              style={{ height: "38px" }}
            >
              Buscar
            </Button>
          </Form>
        </div>
      </div>
      <div className="row">
        <div className="col-12 ">
          <Table responsive className="table-striped table-hover">
            <thead>
              <tr>
                <th className="titleItems">IDE Libro</th>
                <th className="titleItems">Titulo</th>
                <th className="titleItems"></th>
                <th className="titleItems"></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>libro x</td>
                <td>
                  <Button
                    variant="primary"
                    type="submit"
                    style={{ width: "100%" }}
                  >
                    Editar
                  </Button>
                </td>
                <td>
                  <Button
                    variant="danger"
                    type="submit"
                    style={{ width: "100%" }}
                  >
                    Eliminar
                  </Button>
                </td>
              </tr>
              <tr>
                <td>2</td>
                <td>libro x</td>
                <td>
                  <Button
                    variant="primary"
                    type="submit"
                    style={{ width: "100%" }}
                  >
                    Editar
                  </Button>
                </td>
                <td>
                  <Button
                    variant="danger"
                    type="submit"
                    style={{ width: "100%" }}
                  >
                    Eliminar
                  </Button>
                </td>
              </tr>
            </tbody>
          </Table>
        </div>
      </div>
    </div>
  );
};

export default Libros;
