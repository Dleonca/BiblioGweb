import React from "react";
import Table from "react-bootstrap/Table";
import Button from 'react-bootstrap/Button';

const PrestamosUser = () => {
  return (
    <div className="row m-2">
      <div className="col-sm- 12 col-md-10 col-lg-4 p-3">
        <h4 className="titleItemsII">Mis Reservas</h4>
        <Table responsive className="table-striped table-hover">
          <thead>
            <tr>
              <th>#</th>
              <th className="titleItems">IDE Libro</th>
              <th className="titleItems">Titulo</th>
              <th className="titleItems">Acción</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              {Array.from({ length: 2 }).map((_, index) => (
                <td key={index}>Table cell</td>
              ))}
              <td><Button variant="danger" type="submit"  style={{ width: '100%' }} >Cancelar</Button>
            </td>
            </tr>
            <tr>
              <td>1</td>
              {Array.from({ length: 2 }).map((_, index) => (
                <td key={index}>Table cell</td>
              ))}
              <td><Button variant="danger" type="submit"  style={{ width: '100%' }} >Cancelar</Button>
            </td>
            </tr>
          </tbody>
        </Table>
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
              <th className="titleItems">Accion</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              {Array.from({ length: 3 }).map((_, index) => (
                <td key={index}>Table cell </td>
              ))}
              <td><Button variant="primary" type="submit"  style={{ width: '100%' }}>Devolución</Button></td>
            </tr>
            <tr>
              <td>2</td>
              {Array.from({ length: 3 }).map((_, index) => (
                <td key={index}>Table cell </td>
              ))}
              <td><Button variant="primary" type="submit"  style={{ width: '100%' }}>Devolución</Button></td>
            </tr>
            <tr>
              <td>1</td>
              {Array.from({ length: 3 }).map((_, index) => (
                <td key={index}>Table cell </td>
              ))}
              <td><Button variant="primary" type="submit"  style={{ width: '100%' }}>Devolución</Button></td>
            </tr>
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default PrestamosUser;
