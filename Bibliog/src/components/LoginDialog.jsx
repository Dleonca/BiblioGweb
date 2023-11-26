import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import "../assets/css/general.css";
import { useNavigate } from 'react-router-dom';

const LoginDialog = ({ show, handleClose }) => {
  const navigate = useNavigate();
  const [showPwd, setShowPwd] = useState(false)

  const [usuario, setUsuario] = useState({
    correo: '',
    clave: '',
  });
  const CorreoChange = (e) => {
    setUsuario({ ...usuario, correo: e.target.value });
  };
  const ClaveChange = (e) => {
    setUsuario({ ...usuario, clave: e.target.value });
  };
  const limpiarCampos = () => {
    setUsuario({
      correo: '',
      clave: '',
    });
  };

  const loguearse = async (e) => {
    e.preventDefault();

    // Llama a la función que realiza la solicitud a la API y pasa el objeto 'usuario'
    VerificarDatosUsuario(usuario);
  };
  const VerificarDatosUsuario = async (usuario) => {
    const apiUrl = 'http://localhost/BiblioG/login.php';

    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'e1f602bf73cc96f53c10bb7f7953a438fb7b3c0a'
        },
        body: JSON.stringify(usuario)
      });
      const responseData = await response.json(); // Leer el cuerpo solo una vez
      console.log(responseData);
      // Acceder a los datos del usuario creado
      const usuariolog = responseData.data;
      if (responseData.data && Object.keys(responseData.data).length > 0) {
        alert(`¡Usuario ${usuariolog.correo}, Existe!`);
        if(usuariolog.rol == 'usuario'){
          navigate('HomeUser');
        }else{
          navigate('Home');
        }
      } else {
        console.log(responseData);
        // Manejar mensajes de error específicos
        alert(`Error: ${responseData.mensaje}`);
        limpiarCampos();
      }

    } catch (error) {
      // Maneja errores de la solicitud
      console.error('Error al realizar la solicitud:', error);
    }

  };
  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title className="title ms-auto">Iniciar sesión</Modal.Title>
      </Modal.Header>
      <Modal.Body className="modalBody">
        <div className="center">
          <Form.Group controlId="formBasicEmail" style={{ width: '100%' }} onSubmit={loguearse} >
            <Form.Label>Correo electrónico</Form.Label>
            <Form.Control type="email" placeholder="Ingrese su correo electrónico" className="input" style={{ width: '100%' }} name="correo" value={usuario.correo} onChange={CorreoChange} />
          </Form.Group>

          <Form.Group controlId="formBasicPassword" style={{ width: '100%' }}>
            <Form.Label>Contraseña</Form.Label>
            <Form.Control type={showPwd ? "text" : "password"} placeholder="Contraseña" className="input" style={{ width: '100%' }} name="clave" value={usuario.clave} onChange={ClaveChange} />
            <div className="position-absolute pointer pwd-icon" onClick={() => setShowPwd(!showPwd)}>
              {showPwd ? <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" height={"1.5rem"}>
                <path d="M12 15a3 3 0 100-6 3 3 0 000 6z" />
                <path fillRule="evenodd" d="M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 010-1.113zM17.25 12a5.25 5.25 0 11-10.5 0 5.25 5.25 0 0110.5 0z" clipRule="evenodd" />
              </svg> : <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" height={"1.5rem"}>
                <path d="M3.53 2.47a.75.75 0 00-1.06 1.06l18 18a.75.75 0 101.06-1.06l-18-18zM22.676 12.553a11.249 11.249 0 01-2.631 4.31l-3.099-3.099a5.25 5.25 0 00-6.71-6.71L7.759 4.577a11.217 11.217 0 014.242-.827c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113z" />
                <path d="M15.75 12c0 .18-.013.357-.037.53l-4.244-4.243A3.75 3.75 0 0115.75 12zM12.53 15.713l-4.243-4.244a3.75 3.75 0 004.243 4.243z" />
                <path d="M6.75 12c0-.619.107-1.213.304-1.764l-3.1-3.1a11.25 11.25 0 00-2.63 4.31c-.12.362-.12.752 0 1.114 1.489 4.467 5.704 7.69 10.675 7.69 1.5 0 2.933-.294 4.242-.827l-2.477-2.477A5.25 5.25 0 016.75 12z" />
              </svg>}</div>
          </Form.Group>

          <p className="forgotPassword">
            <a href="#">¿Olvidaste tu contraseña?</a>
          </p>

          <Button variant="primary" type="submit" className="button" style={{ width: '100%' }} onClick={loguearse}>
            Iniciar sesión
          </Button>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default LoginDialog;