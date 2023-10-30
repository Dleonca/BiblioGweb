import React from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import Form from 'react-bootstrap/Form';

const PrestamosAdmin = () => {
  return (
    <div className="row m-2">
      <div className="col-sm- 12 col-md-10 col-lg-4 p-3">
        <div className="row">
          <div className="col-12">
            <h4 className="titleItemsII">Reservas</h4>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <Form className="d-flex justify-content-between">
              <Form.Group
                className="mb-3 col-4"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Control type="text" placeholder="Tipo ID" />
              </Form.Group>
              <Form.Group
                className="mb-3 col-4"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Control type="number" placeholder="ID Usuario" />
              </Form.Group>
              <Button
                  variant="primary"
                  type="submit"
                  className=" btn col-3" style={{ height: "38px" }}
                >
                  Buscar
                </Button>
            </Form>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
          <Table responsive className="table-striped table-hover">
          <thead>
            <tr>
              <th>#</th>
              <th className="titleItems">ID Usuario</th>
              <th className="titleItems"></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              {Array.from({ length: 1 }).map((_, index) => (
                <td key={index}>Table cell</td>
              ))}
              <td>
                <Button
                  variant="primary"
                  type="submit"
                  style={{ width: "100%" }}
                >
                  Ver Reservas
                </Button>
              </td>
            </tr>
            
          </tbody>
        </Table>
          </div>
        </div>
        
      </div>
      <div className="col-sm- 12 col-md-10 col-lg-8 p-3">
        <h4 className="titleItemsII">Libros Prestados</h4>
        <Table responsive className="table-striped table-hover">
          <thead>
            <tr>
              <th className="titleItems">IDE Libro</th>
              <th className="titleItems">Titulo</th>
              <th className="titleItems">Desde</th>
              <th className="titleItems">Hasta</th>
              <th className="titleItems">ID Usuario</th>
              <th className="titleItems"></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              {Array.from({ length: 4 }).map((_, index) => (
                <td key={index}>Table cell </td>
              ))}
              <td>
                <Button
                  variant="primary"
                  type="submit"
                  style={{ width: "100%" }}
                >
                  Estado
                </Button>
              </td>
            </tr>
            <tr>
              <td>2</td>
              {Array.from({ length: 4 }).map((_, index) => (
                <td key={index}>Table cell </td>
              ))}
              <td>
                <Button
                  variant="primary"
                  type="submit"
                  style={{ width: "100%" }}
                >
                  Estado
                </Button>
              </td>
            </tr>
            <tr>
              <td>1</td>
              {Array.from({ length: 4 }).map((_, index) => (
                <td key={index}>Table cell </td>
              ))}
              <td>
                <Button
                  variant="primary"
                  type="submit"
                  style={{ width: "100%" }}
                >
                  Estado
                </Button>
              </td>
            </tr>
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default PrestamosAdmin;
