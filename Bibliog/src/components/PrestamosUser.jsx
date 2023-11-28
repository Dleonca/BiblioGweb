import React, { useState, useEffect } from 'react';
import Table from "react-bootstrap/Table";
import Button from 'react-bootstrap/Button';

const PrestamosUser = () => {
  const [verReservas, setVerReservas] = useState([]);

  var datosGuardados = localStorage.getItem("datosUsuario");
  var UsuarioReserva = JSON.parse(datosGuardados);
  var idUser = UsuarioReserva.id ;
  console.log(idUser);

  useEffect(() => {
      const fetchReservaDetails = async () => {
          try {
              const response = await fetch(`http://localhost/BiblioG/getReservasUsuario.php/${idUser}`, {
                  method: 'GET',
                  headers: {
                      'Content-Type': 'application/json',
                      'Authorization': 'e1f602bf73cc96f53c10bb7f7953a438fb7b3c0a'
                  }
              });
              const responseData = await response.json(); // Leer el cuerpo solo una vez
              console.log('esta es la respuesta de la api'+responseData);
              const reservasUser = responseData.data;
              if (responseData.data && Object.keys(responseData.data).length > 0) {
                setVerReservas(reservasUser);
                console.log(reservasUser);
              } else {
                  console.error('Error al obtener detalles del libro:', response.statusText);
              }
          } catch (error) {
              console.error('Error en la solicitud:', error);
          }
      };
        fetchReservaDetails();
  }, [idUser]);

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
          {verReservas && verReservas.length > 0 && verReservas.map((reserva) => (
                  <tr >
                    <td>{reserva.id_reserva}</td>
                    <td>{reserva.nombre} {reserva.apellidos}</td>
                    <td>{reserva.nombre_libro}</td>
                    <td>
                    <Button variant="danger" type="submit"  style={{ width: '100%' }} >Cancelar</Button>
                    </td>
                  </tr>
                ))}
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
              <td>2</td>
             <td >Título del Libro 2</td>
             <td >2023-12-01</td>
             <td >2023-12-15</td>
              <td><Button variant="primary" type="submit"  style={{ width: '100%' }}>Devolución</Button></td>
            </tr>
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default PrestamosUser;
