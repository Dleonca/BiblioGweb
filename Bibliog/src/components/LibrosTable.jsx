import React, { useState, useEffect } from 'react';
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
const LibrosTable = () => {
    const [verlibros, setVerlibros] = useState([]);

    useEffect(() => {
        const apiUrl = 'http://localhost/BiblioG/getLibros.php';

        const fetchData = async () => {
            try {
                const response = await fetch(apiUrl, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': 'e1f602bf73cc96f53c10bb7f7953a438fb7b3c0a'
                    }
                });
                const data = await response.json();
                setVerlibros(data.data);
            } catch (error) {
                console.error('Error al obtener datos:', error);
            }
        };

        fetchData();
    }, []); // La dependencia vacía asegura que se ejecute solo una vez al montar el componente.

    return (
        <div>
            <Table responsive className="table-striped table-hover">
                <thead>
                    <tr>
                        <th className="titleItems">Titulo</th>
                        <th className="titleItems">Autor</th>
                        <th className="titleItems">Publicacion</th>
                        <th className="titleItems">Genero</th>
                        <th className="titleItems">Cant.</th>
                        <th className="titleItems"></th>
                    </tr>
                </thead>
                <tbody>
                    {verlibros.map((libro) => (
                        <tr key={libro.id}>
                            <td>{libro.titulo}</td>
                            <td>{libro.autor}</td>
                            <td>{libro.publicacion}</td>
                            <td>{libro.genero}</td>
                            <td>{libro.cantidad}</td>
                            <td>
                                <Button
                                    variant="primary"
                                    type="submit"
                                    style={{ width: "100%" }}
                                >
                                    Editar
                                </Button>
                            </td>
                        </tr>
                    ))}

                </tbody>
            </Table>
        </div>
    );
};

export default LibrosTable;
