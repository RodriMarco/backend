-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1:3306
-- Tiempo de generación: 07-09-2022 a las 02:16:47
-- Versión del servidor: 5.7.36
-- Versión de PHP: 7.4.26

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `ironboxingprofes`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `bdhorarios`
--

DROP TABLE IF EXISTS `bdhorarios`;
CREATE TABLE IF NOT EXISTS `bdhorarios` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `horario` varchar(150) NOT NULL,
  `dia1` varchar(250) NOT NULL,
  `dia2` varchar(250) NOT NULL,
  `dia3` varchar(250) NOT NULL,
  `dia4` varchar(250) NOT NULL,
  `dia5` varchar(250) NOT NULL,
  `dia6` varchar(250) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=9 DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `bdhorarios`
--

INSERT INTO `bdhorarios` (`id`, `horario`, `dia1`, `dia2`, `dia3`, `dia4`, `dia5`, `dia6`) VALUES
(1, '10:00 a 11:30', 'Kick Boxing (Manu)', 'Boxeo (Gaston)', 'Kick Boxing (Manu)', 'Boxeo (Gaston)', 'Kick Boxing (Manu)', ''),
(3, '16:00 a 17:30', 'Boxeo (Antonio)', '', 'Boxeo (Antonio)', '', 'Boxeo (Antonio)', ''),
(5, '17:00 a 18:00', '', 'Crosstraining (Edu)', '', 'Crosstraining (Edu)', '', ''),
(6, '17:30 a 19:00', 'Kick Boxing (Eva)', '', 'Kick Boxing (Eva)', '', 'Kick Boxing (Eva)', ''),
(7, '19:00 a 20:30', 'Boxeo/Kick (Antonio)', 'Boxeo (Fabio)', 'Boxeo/Kick (Antonio)', 'Boxeo (Fabio)', 'Boxeo/Kick (Antonio)', 'Boxeo (Fabio)'),
(8, '20:30 a 22:00', 'Funcional Box (Ivo)', 'Kick Boxing (Rodrigo)', 'Funcional Box (Ivo)', 'Kick Boxing (Rodrigo)', 'Funcional Box (Ivo)', '');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `bdnovedades`
--

DROP TABLE IF EXISTS `bdnovedades`;
CREATE TABLE IF NOT EXISTS `bdnovedades` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `img_id` varchar(250) DEFAULT NULL,
  `titulo` varchar(250) NOT NULL,
  `cuerpo` text NOT NULL,
  `fecha` date NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=17 DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `bdnovedades`
--

INSERT INTO `bdnovedades` (`id`, `img_id`, `titulo`, `cuerpo`, `fecha`) VALUES
(1, 'xckp6vpjcr3pyquxmitg', 'Combate semiprofesional k1 style', 'Combate semiprofesional k1 style\r\nAquino vs. Nuñez\r\n\r\n\r\nEn la Federación Argentina de box, Castro Barros 75, Almagro, CABA\r\n\r\n¡Gracias a la organización por la invitación!', '2022-09-10');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

DROP TABLE IF EXISTS `usuarios`;
CREATE TABLE IF NOT EXISTS `usuarios` (
  `id` int(5) NOT NULL AUTO_INCREMENT,
  `usuario` varchar(250) NOT NULL,
  `password` varchar(250) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id`, `usuario`, `password`) VALUES
(1, 'Rodrigo', '0128c7120baf34bcba13b47cbd6c9ef2'),
(2, 'Flavia', '81dc9bdb52d04dc20036dbd8313ed055'),
(3, 'ironboxing', '973a5f0ccbc4ee3524ccf035d35b284b');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
