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
  
      const responseData = await response.json();
  
      console.log(responseData);
      alert("¡Registro creado exitosamente!");
  
    } catch (error) {
      // Maneja errores de la solicitud
      console.error('Error al realizar la solicitud:', error);
    }
  };
  
  export { enviarDatosUsuario };