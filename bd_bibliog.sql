-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 24-11-2023 a las 02:14:31
-- Versión del servidor: 10.4.28-MariaDB
-- Versión de PHP: 8.0.28

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `bd_bibliog`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `libros`
--

CREATE TABLE `libros` (
  `id_libro` int(11) NOT NULL,
  `titulo` varchar(255) NOT NULL,
  `autor` varchar(255) NOT NULL,
  `publicacion` date DEFAULT NULL,
  `genero` varchar(50) DEFAULT NULL,
  `cantidad` int(11) DEFAULT NULL,
  `descripcion` text DEFAULT NULL,
  `imagen` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `libros`
--

INSERT INTO `libros` (`id_libro`, `titulo`, `autor`, `publicacion`, `genero`, `cantidad`, `descripcion`, `imagen`) VALUES
(1, 'Los juegos del hambre', 'Nuevo autor', '2023-11-20', 'Ciencia Ficción', 10, 'Nueva descripción del libro', 'nueva_imagen.jpg'),
(2, 'Título del Libro 2', 'Autor del Libro', '2023-11-20', 'Género del Libro', 10, 'Descripción del Libro', 'url_de_la_imagen'),
(3, 'El principito', 'Nuevo autor', '2023-11-20', 'Ciencia Ficción', 10, 'Nueva descripción del libro', 'nueva_imagen.jpg'),
(4, 'El principito 2', 'Autor del Libro', '2023-11-20', 'Género del Libro', 10, 'Descripción del Libro', 'url_de_la_imagen'),
(5, 'Título del Libro 2', 'Autor del Libro', '2023-11-20', 'Género del Libro', 10, 'Descripción del Libro', 'url_de_la_imagen');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `prestamos`
--

CREATE TABLE `prestamos` (
  `id_prestamo` int(11) NOT NULL,
  `id_libro` int(11) DEFAULT NULL,
  `id_reserva` int(11) DEFAULT NULL,
  `estado` enum('prestado','devuelto') DEFAULT 'prestado',
  `desde` date DEFAULT NULL,
  `hasta` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `prestamos`
--

INSERT INTO `prestamos` (`id_prestamo`, `id_libro`, `id_reserva`, `estado`, `desde`, `hasta`) VALUES
(4, 2, 1, 'devuelto', '2023-12-01', '2023-12-15'),
(5, 2, 3, 'prestado', '2023-12-01', '2023-12-15');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `reservas`
--

CREATE TABLE `reservas` (
  `id_reserva` int(11) NOT NULL,
  `id_usuario` int(11) DEFAULT NULL,
  `id_libro` int(11) DEFAULT NULL,
  `estado` enum('enviado','aceptado','rechazado') DEFAULT 'enviado'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `reservas`
--

INSERT INTO `reservas` (`id_reserva`, `id_usuario`, `id_libro`, `estado`) VALUES
(1, 1, 2, 'aceptado'),
(2, 1, 2, 'enviado'),
(3, 1, 2, 'aceptado');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `id` int(11) NOT NULL,
  `nombre` varchar(255) NOT NULL,
  `apellidos` varchar(255) NOT NULL,
  `tipo_doc` varchar(20) DEFAULT NULL,
  `correo` varchar(255) NOT NULL,
  `telefono` varchar(15) DEFAULT NULL,
  `clave` varchar(255) NOT NULL,
  `rol` varchar(20) DEFAULT NULL,
  `documento` varchar(15) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id`, `nombre`, `apellidos`, `tipo_doc`, `correo`, `telefono`, `clave`, `rol`, `documento`) VALUES
(1, 'Nuevo', 'Usuario', NULL, 'nuevo@ejemplo.com', NULL, 'contrasena123', 'usuario', ''),
(6, 'Nuevo 2', 'Usuario', NULL, 'nuevo@ejemp2lo.com', NULL, 'contrasena123', 'usuario', ''),
(26, 'Nuevo 2', 'Usuario', NULL, 'nuevo@ejempw2lo.com', NULL, 'contrasena123', 'usuario', ''),
(27, 'Juan', 'Pérez', 'CC', 'juan.perez@example.com', '123456789', 'clave123', 'usuario', '1234567890');

INSERT INTO `usuarios` (`id`, `nombre`, `apellidos`, `tipo_doc`, `correo`, `telefono`, `clave`, `rol`, `documento`) VALUES
(10, 'Administrador', 'Bibliog', 'OTR', 'admin@admin.com', '123', 'admin', 'Administrador', '1234567890');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `libros`
--
ALTER TABLE `libros`
  ADD PRIMARY KEY (`id_libro`);

--
-- Indices de la tabla `prestamos`
--
ALTER TABLE `prestamos`
  ADD PRIMARY KEY (`id_prestamo`),
  ADD KEY `id_libro` (`id_libro`),
  ADD KEY `id_reserva` (`id_reserva`);

--
-- Indices de la tabla `reservas`
--
ALTER TABLE `reservas`
  ADD PRIMARY KEY (`id_reserva`),
  ADD KEY `id_usuario` (`id_usuario`),
  ADD KEY `id_libro` (`id_libro`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `correo` (`correo`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `libros`
--
ALTER TABLE `libros`
  MODIFY `id_libro` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de la tabla `prestamos`
--
ALTER TABLE `prestamos`
  MODIFY `id_prestamo` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de la tabla `reservas`
--
ALTER TABLE `reservas`
  MODIFY `id_reserva` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=28;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `prestamos`
--
ALTER TABLE `prestamos`
  ADD CONSTRAINT `prestamos_ibfk_1` FOREIGN KEY (`id_libro`) REFERENCES `libros` (`id_libro`),
  ADD CONSTRAINT `prestamos_ibfk_2` FOREIGN KEY (`id_reserva`) REFERENCES `reservas` (`id_reserva`);

--
-- Filtros para la tabla `reservas`
--
ALTER TABLE `reservas`
  ADD CONSTRAINT `reservas_ibfk_1` FOREIGN KEY (`id_usuario`) REFERENCES `usuarios` (`id`),
  ADD CONSTRAINT `reservas_ibfk_2` FOREIGN KEY (`id_libro`) REFERENCES `libros` (`id_libro`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
