import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import "../assets/css/general.css";
//import { useNavigate } from 'react-router-dom';

const RegisterDialog = ({ show, handleClose }) => {
    //  const navigate = useNavigate();
    const CC = 'CC';
    const TI = 'TI';
    const PS = 'PS';
    const OT = 'OTR';
    const [usuario, setUsuario] = useState({
        nombre: '',
        apellidos: '',
        tipo_doc: '',
        correo: '',
        telefono: '',
        clave: '',
        rol: 'usuario',
        documento: ''
    });

    const NombreChange = (e) => {
        setUsuario({ ...usuario, nombre: e.target.value });
    };
    const ApellidosChange = (e) => {
        setUsuario({ ...usuario, apellidos: e.target.value });
    };
    const TipoDocChange = (e) => {
        setUsuario({ ...usuario, tipo_doc: e.target.value });
    };
    const CorreoChange = (e) => {
        setUsuario({ ...usuario, correo: e.target.value });
    };
    const TelefonoChange = (e) => {
        setUsuario({ ...usuario, telefono: e.target.value });
    };
    const ClaveChange = (e) => {
        setUsuario({ ...usuario, clave: e.target.value });
    };
    const DocumentoChange = (e) => {
        setUsuario({ ...usuario, documento: e.target.value });
    };
    const limpiarCampos = () => {
        setUsuario({
            nombre: '',
            apellidos: '',
            tipo_doc: '',
            correo: '',
            telefono: '',
            clave: '',
            rol: 'usuario',
            documento: ''
        });
    };

    const Registrarse = async (e) => {
        e.preventDefault();

        // Llama a la función que realiza la solicitud a la API y pasa el objeto 'usuario'
        enviarDatosUsuario(usuario);
        // navigate('HomeUser');
    };
    const enviarDatosUsuario = async (usuario) => {
        const apiUrl = 'http://localhost/BiblioG/usuarios.php';

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
            const usuarioCreado = responseData.data;
            if (responseData.data && Object.keys(responseData.data).length > 0) {
                alert(`¡Usuario ${usuarioCreado.nombre} creado exitosamente!`);
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
        <Modal show={show} onHide={handleClose} centered dialogClassName="my-modal" >
            <Modal.Header closeButton>
                <Modal.Title className="Dtitle ms-auto" >Regístrate en BiblioG</Modal.Title>
            </Modal.Header>
            <Modal.Body className="DmodalBody">
                <Form className="DformContainer" onSubmit={Registrarse} >
                    <div className="DformRow">
                        <Form.Group controlId="formBasicName" className="DformGroup">
                            <Form.Label>Nombres</Form.Label>
                            <Form.Control type="text" placeholder="Ingresa tus nombres" className="Dinput" name="nombre" value={usuario.nombre} onChange={NombreChange} />
                        </Form.Group>

                        <Form.Group controlId="formBasicLastName" className="DformGroup">
                            <Form.Label>Apellidos</Form.Label>
                            <Form.Control type="text" placeholder="Ingresa tus apellidos" className="Dinput" name="apellidos" value={usuario.apellidos} onChange={ApellidosChange} />
                        </Form.Group>
                    </div>

                    <div className="DformRow">
                        <Form.Group controlId="formBasicTipoId" className="DformGroup">
                            <Form.Label>Tipo Doc</Form.Label>
                            <Form.Select name="tipo_doc" value={usuario.tipo_doc} onChange={TipoDocChange}>
                                <option >Disabled select</option>
                                <option value={CC}>Cedula</option>
                                <option value={TI}>Tarjeta de Identidad</option>
                                <option value={PS}>Pasaporte</option>
                                <option value={OT}>Otro</option>
                            </Form.Select>
                        </Form.Group>

                        <Form.Group controlId="formDocumento" className="DformGroup">
                            <Form.Label>Numero Doc
                            </Form.Label>
                            <Form.Control type="text" placeholder="Ingresa tu identificación" className="Dinput" name="documento" value={usuario.documento} onChange={DocumentoChange} />
                        </Form.Group>
                    </div>

                    <div className="DformRow">
                        <Form.Group controlId="formBasicEmail" className="DformGroup">
                            <Form.Label>Correo Electrónico</Form.Label>
                            <Form.Control type="email" placeholder="Ingresa tu correo electrónico" className="Dinput" name="correo" value={usuario.correo} onChange={CorreoChange} />
                        </Form.Group>
                        <Form.Group controlId="formBasicPassword" className="DformGroup">
                            <Form.Label>Contraseña</Form.Label>
                            <Form.Control type="password" placeholder="Ingresa tu contraseña" className="Dinput" value={usuario.clave} onChange={ClaveChange} />
                        </Form.Group>

                    </div>

                    <div className="DformRow">
                        <Form.Group controlId="formBasicPhone" className="DformGroup">
                            <Form.Label>Teléfono o Celular</Form.Label>
                            <Form.Control type="text" placeholder="Ingresa tu número de teléfono o celular" className="Dinput" name="telefono" value={usuario.telefono} onChange={TelefonoChange} />
                        </Form.Group>

                        <Button variant="primary" type="submit" className="Dbutton" onClick={Registrarse}>
                            Regístrate
                        </Button>
                    </div>
                </Form>
            </Modal.Body>
        </Modal>
    );
};

export default RegisterDialog;

