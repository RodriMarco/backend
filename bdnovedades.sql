-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1:3306
-- Tiempo de generación: 31-08-2022 a las 23:27:49
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
) ENGINE=MyISAM AUTO_INCREMENT=12 DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `bdnovedades`
--

INSERT INTO `bdnovedades` (`id`, `img_id`, `titulo`, `cuerpo`, `fecha`) VALUES
(1, 'vx4lzcdnxqkp1iin5im8', 'Novedad 1', 'Cinturon rendido', '2022-08-31'),
(5, NULL, 'asasdasd', 'asdasdasdqw qw q ', '2022-01-01'),
(6, NULL, 'Nueva 5', 'Esto es una prueba ', '2022-01-01'),
(11, 'yexwljmrvmprtutyugnm', 'Prueba logo', 'logo del Mamba team', '2022-01-01'),
(10, 'arjszoxgrcq7yivqoucc', 'deberia andar la img ahora', 'aa', '2022-01-01');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
