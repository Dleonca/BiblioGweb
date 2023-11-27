import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import LibrosTable from "./LibrosTable";

const Libros = () => {
  const [fecha, setFecha] = useState(null);
  const [libro, setLibro] = useState({
    titulo: '',
    autor: '',
    publicacion: null,
    genero: '',
    cantidad: '',
    descripcion: '',
  });
  const DateChange = (date) => {
    setFecha(date);

    // Actualizar el estado del libro con la nueva fecha de publicación
    setLibro((prevLibro) => ({
      ...prevLibro,
      publicacion: date,
    }));
  };
  const ImageChange = (event) => {
    const archivo = event.target.files[0];

    if (archivo) {
      // Acceder al nombre del archivo
      const nombreImagen = archivo.name;

      // Actualizar el estado del libro con el nombre de la imagen
      setLibro((prevLibro) => ({
        ...prevLibro,
        imagen: 'http://localhost/BiblioG/imglibro/' + nombreImagen,
      }));
    }
  };

  const TituloChange = (e) => {
    setLibro({ ...libro, titulo: e.target.value });
  };
  const AutorChange = (e) => {
    setLibro({ ...libro, autor: e.target.value });
  };
  const GeneroChange = (e) => {
    setLibro({ ...libro, genero: e.target.value });
  };
  const CantidadChange = (e) => {
    setLibro({ ...libro, cantidad: e.target.value });
  };
  const DescripcionChange = (e) => {
    setLibro({ ...libro, descripcion: e.target.value });
  };

  const limpiarCampos = () => {
    setLibro({
      titulo: '',
      autor: '',
      publicacion: '',
      genero: '',
      cantidad: '',
      descripcion: '',
      imagen: ''
    });
  };

  const CrearLibro = async (e) => {
    e.preventDefault();

    // Llama a la función que realiza la solicitud a la API y pasa el objeto 'usuario'
    enviarDatosLibro(libro);
    // navigate('HomeUser');
  };
  const enviarDatosLibro = async (libro) => {
    const apiUrl = 'http://localhost/BiblioG/libros.php';

    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'e1f602bf73cc96f53c10bb7f7953a438fb7b3c0a'
        },
        body: JSON.stringify(libro)
      });
      const responseData = await response.json(); // Leer el cuerpo solo una vez
      console.log(responseData);
      // Acceder a los datos del usuario creado
      const libroCreado = responseData.data;
      if (responseData.data && Object.keys(responseData.data).length > 0) {
        alert(`¡Libro ${libroCreado.titulo} creado exitosamente!`);
        limpiarCampos();
      } else {
        console.log(responseData);
        // Manejar mensajes de error específicos
        alert(`Error: ${responseData.mensaje}`);
      }
      // Limpiar responseData después de usarlo
      // Esto asegura que en la próxima ejecución la variable esté lista para almacenar la nueva respuesta
      setResponseData(null);
    } catch (error) {
      // Maneja errores de la solicitud
      console.error('Error al realizar la solicitud:', error);
    }

  };

    return (
      <div className="m-5">
        <div className="row">
          <h4 className="titleItemsII">Crear Nuevo Libro</h4>
          <hr />
        </div>
        <div className="row">
          <Form className="d-flex justify-content-end">
            <div className="col-3">
              <Form.Group
                className="m-1 col-12 d-flex flex-row justify-content-around"
                controlId="exampleForm.ControlInput1"
              >
                <Col xs={6} md={4} style={{ height: "170px" }}>
                  <img src={libro.imagen} alt="Imagen seleccionada" style={{ maxWidth: '100%' }} />
                </Col>
              </Form.Group>
              <Form.Group
                className="m-1 col-12 d-flex flex-row justify-content-around"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Group controlId="formFile" className="mb-3">
                  <Form.Control type="file" accept="image/*" name="imagen" onChange={ImageChange} />
                </Form.Group>
              </Form.Group>
            </div>
            <div className="col-9">
              <Form.Group
                className="m-1 col-12 d-flex flex-row justify-content-around"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Control
                  type="text"
                  name="titulo" value={libro.titulo} onChange={TituloChange}
                  style={{ width: "65%" }}
                  placeholder="Titulo"
                />
                <Form.Control
                  type="text"
                  name="autor" value={libro.autor} onChange={AutorChange}
                  style={{ width: "32%" }}
                  placeholder="Autor"
                />
              </Form.Group>
              <Form.Group
                className="m-1 col-12 d-flex flex-row justify-content-around"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Control
                  as={DatePicker}
                  selected={fecha}
                  onChange={DateChange}
                  autoComplete="off"
                  placeholderText="Fecha de Publicación"
                  dateFormat="yyyy-MM-dd"
                  name="publicacion" value={libro.publicacion}
                  style={{ width: '32%' }}
                />
                <Form.Control
                  type="text"
                  name="genero" value={libro.genero} onChange={GeneroChange}
                  style={{ width: "32%" }}
                  placeholder="Genero"
                />
                <Form.Control
                  type="text"
                  name="cantidad" value={libro.cantidad} onChange={CantidadChange}
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
                  name="descripcion" value={libro.descripcion} onChange={DescripcionChange}
                  style={{ width: "99%" }}
                  placeholder="Agrega una descripcion..."
                />
              </Form.Group>
              <Button
                variant="primary"
                type="submit"
                className=" btn col-3 m-1"
                onClick={CrearLibro}
                style={{ height: "38px" }}
              >
                Crear Libro
              </Button>
            </div>
          </Form>
        </div>
        <hr />
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
          <LibrosTable />
          </div>
        </div>
      </div>
    );
  };

  export default Libros;
