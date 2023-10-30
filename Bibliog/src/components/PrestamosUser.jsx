import React from "react";
import Table from "react-bootstrap/Table";

const PrestamosUser = () => {
  return (
    <div className="row m-2">
      <div className="col-sm- 12 col-md-10 col-lg-4 p-3">
        <h3>Mis Reservas</h3>
        <Table responsive className="table-striped table-hover">
          <thead>
            <tr>
              <th>#</th>
              <th>IDE LIBRO</th>
              <th>TITULO</th>
              <th>ACCION
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              {Array.from({ length: 3 }).map((_, index) => (
                <td key={index}>Table cell</td>
              ))}
            </tr>
            <tr>
              <td>1</td>
              {Array.from({ length: 3 }).map((_, index) => (
                <td key={index}>Table cell</td>
              ))}
            </tr>
          </tbody>
        </Table>
      </div>
      <div className="col-sm- 12 col-md-10 col-lg-8 p-3">
        <h3>Libros Prestados</h3>
        <Table responsive className="table-striped table-hover">
          <thead>
            <tr>
              <th>IDE LIBRO</th>
              <th>TITULO</th>
              <th>DESDE</th>
              <th>HASTA</th>
              <th>ACCION</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              {Array.from({ length: 4 }).map((_, index) => (
                <td key={index}>Table cell </td>
              ))}
            </tr>
            <tr>
              <td>2</td>
              {Array.from({ length: 4 }).map((_, index) => (
                <td key={index}>Table cell </td>
              ))}
            </tr>
            <tr>
              <td>1</td>
              {Array.from({ length: 4 }).map((_, index) => (
                <td key={index}>Table cell </td>
              ))}
            </tr>
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default PrestamosUser;
