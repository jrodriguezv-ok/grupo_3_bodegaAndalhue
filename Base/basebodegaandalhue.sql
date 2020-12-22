-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 22-12-2020 a las 13:13:10
-- Versión del servidor: 10.4.13-MariaDB
-- Versión de PHP: 7.4.7

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `basebodegaandalhue`
--
CREATE DATABASE IF NOT EXISTS `basebodegaandalhue` DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;
USE `basebodegaandalhue`;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `brands`
--

CREATE TABLE `brands` (
  `id` int(11) NOT NULL,
  `name` varchar(45) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `brands`
--

INSERT INTO `brands` (`id`, `name`) VALUES
(1, 'Línea A'),
(2, 'Línea B'),
(3, 'Línea C');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `carts`
--

CREATE TABLE `carts` (
  `id` int(11) NOT NULL,
  `quantity` int(11) DEFAULT NULL,
  `user_id` int(11) NOT NULL,
  `creation_date` date DEFAULT NULL,
  `date_of_purchase` date DEFAULT NULL,
  `state` varchar(45) DEFAULT NULL,
  `total` decimal(8,2) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `carts`
--

INSERT INTO `carts` (`id`, `quantity`, `user_id`, `creation_date`, `date_of_purchase`, `state`, `total`) VALUES
(1, 1, 4, '2020-12-19', '2020-12-19', '0', '6520.00'),
(2, 3, 4, '2020-12-20', '2020-12-20', '0', '29750.00'),
(3, NULL, 1, '2020-12-20', NULL, '1', NULL),
(4, 2, 4, '2020-12-20', '2020-12-20', '0', '23930.00'),
(5, 1, 4, '2020-12-20', '2020-12-20', '0', '18200.00'),
(6, 2, 4, '2020-12-20', '2020-12-21', '0', '19480.00'),
(7, NULL, 12, '2020-12-21', NULL, '1', NULL),
(8, 2, 4, '2020-12-21', '2020-12-21', '0', '25600.00'),
(9, 1, 4, '2020-12-21', '2020-12-21', '0', '12200.00'),
(10, 1, 4, '2020-12-21', '2020-12-21', '0', '12200.00'),
(11, 2, 4, '2020-12-21', '2020-12-21', '0', '27220.00');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `cart_product`
--

CREATE TABLE `cart_product` (
  `id` int(11) NOT NULL,
  `cart_id` int(11) NOT NULL,
  `product_id` int(11) NOT NULL,
  `quantity` int(11) DEFAULT NULL,
  `frozen_price` decimal(8,2) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `cart_product`
--

INSERT INTO `cart_product` (`id`, `cart_id`, `product_id`, `quantity`, `frozen_price`) VALUES
(2, 1, 5, 1, '6320.00'),
(3, 2, 5, 3, '6000.00'),
(4, 2, 2, 3, '2950.00'),
(6, 3, 3, 4, '4250.00'),
(7, 2, 6, 2, '1350.00'),
(9, 4, 5, 2, '6000.00'),
(10, 4, 4, 3, '3910.00'),
(11, 5, 5, 3, '6000.00'),
(15, 3, 6, 2, '1350.00'),
(18, 7, 5, 3, '6000.00'),
(20, 6, 5, 3, '4800.00'),
(21, 6, 1, 1, '4880.00'),
(23, 8, 1, 2, '4880.00'),
(24, 8, 4, 4, '3910.00'),
(26, 10, 5, 2, '6000.00'),
(28, 11, 5, 4, '4800.00'),
(29, 11, 4, 2, '3910.00');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `categories`
--

CREATE TABLE `categories` (
  `id` int(11) NOT NULL,
  `name` varchar(45) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `categories`
--

INSERT INTO `categories` (`id`, `name`) VALUES
(1, 'Tinto'),
(2, 'Blanco'),
(3, 'Rosado');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `displays`
--

CREATE TABLE `displays` (
  `id` int(11) NOT NULL,
  `name` varchar(45) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `displays`
--

INSERT INTO `displays` (`id`, `name`) VALUES
(1, 'Estuche botella'),
(2, 'Estuche botella + copa'),
(3, 'Caja x 2 unid.'),
(4, 'Caja x 3 unid.'),
(5, 'Caja x 6 unid.'),
(6, 'Caja x 12 unid.');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `products`
--

CREATE TABLE `products` (
  `id` int(11) NOT NULL,
  `cat_id` int(11) NOT NULL,
  `brand_id` int(11) NOT NULL,
  `varietal_id` int(11) NOT NULL,
  `quality_id` int(11) NOT NULL,
  `vintage` int(11) DEFAULT NULL,
  `display_id` int(11) NOT NULL,
  `price` decimal(8,2) DEFAULT NULL,
  `discount` int(11) DEFAULT NULL,
  `tasting` text DEFAULT NULL,
  `pairing` text DEFAULT NULL,
  `temperature_id` int(11) NOT NULL,
  `image` varchar(45) DEFAULT NULL,
  `datasheet` longtext DEFAULT NULL,
  `state_id` int(45) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `products`
--

INSERT INTO `products` (`id`, `cat_id`, `brand_id`, `varietal_id`, `quality_id`, `vintage`, `display_id`, `price`, `discount`, `tasting`, `pairing`, `temperature_id`, `image`, `datasheet`, `state_id`) VALUES
(1, 1, 1, 1, 1, 2015, 5, '6100.00', 10, 'Posee un color rojo rubí intenso con tintes azulados, típicos de la variedad. Aparecen notas de frutas rojas y negras como la cereza madura y la grosella; acomplejadas por la vainilla que aporta el roble, también aparecen especies como el clavo de olor y la pimienta negra.\r\nSe detectan taninos dulces, robustos y sedosos de grata persistencia en boca.\r\nGracias al añejamiento durante catorce meses en barricas de roble de origen francés y americano, de primer uso, se logra un vino equilibrado y de gran estructura.', 'Ideal para acompañar asados de carne roja, pastas y comidas condimentadas.', 7, 'image-1608493449437.png', 'datasheet-1608408838194.pdf', 1),
(2, 1, 1, 6, 1, 2016, 4, '2950.00', 0, 'Presenta un color rojo intenso, con matices púrpura. En nariz se destaca el perfume de las frutas rojas como frambuesas y frutillas. Su madurez en barricas le aporta notas dulces de vainilla y caramelo. Es un vino voluptuoso, equilibrado y amplio en su expresión.', 'Ideal para acompañar comidas medianamente condimentas, picadas, carnes rojas suaves o asadas, vegetales grillados, pastas con salsas de tomate y queso, guisos con legumbres, y quesos duros.', 11, 'image-1608408991425.png', 'datasheet-1608408991426.pdf', 1),
(3, 1, 2, 3, 2, 2018, 5, '4250.00', 0, 'Posee un color rojo oscuro con destellos azulados y un brillo singular. Aparecen sabores a frutos rojos, especialmente ciruelas y frutillas ,también confituras, acomplejados con el café que aporta el roble.\r\nEn boca tiene una entrada grata y redondo, con taninos jugosos , que otorgan largo y placentero final.', 'Ideal para acompañar carnes rojas, quesos y salsas gustosas.', 11, 'image-1608409158021.png', 'datasheet-1608409158022.pdf', 1),
(4, 2, 2, 4, 2, 2019, 5, '4600.00', 15, 'De color amarillo palido con destellos verdozos. En nariz se precibe durazno blanco, mango y aromas citricos como el pomelo. En boca es sedozo, dúctil y cremoso.', 'Ideal para acompañar carnes blancas, pescado y frutos de mar.', 7, 'image-1608409353579.png', 'datasheet-1608409353607.pdf', 1),
(5, 3, 2, 7, 2, 2019, 6, '6000.00', 20, 'Color rosado fresa-cereza intenso, brillante, tonalidades azul-amarillentas. En nariz encontramos aromas de melocotón, orejones, barquillo y reminiscencias minerales.', 'Ideal para acompañar diversas entradas veraniegas como las bruschettas de anchoas, hummus o un refrescante prosciutto con melanzane.', 3, 'image-1608409542230.png', 'datasheet-1608409542231.pdf', 1),
(6, 2, 3, 5, 3, 2020, 3, '1500.00', 10, 'De color amarillo dorado de intensidad media. Fragante en nariz con aromas a flores y frutas maduras como pera, durazno, damasco y notas de miel y piel de naranja.', 'Ideal para maridar con quesos grasos y de aromas intensos como el queso azul. También armonizan con postres y chocolates.', 3, 'image-1608409956806.png', 'datasheet-1608409956807.pdf', 1),
(7, 1, 3, 6, 2, 2018, 5, '4700.00', 10, 'Posee un color rojo rubí intenso con tintes azulados, típicos  de la variedad. Aparecen notas de frutas rojas, como la mermelada de ciruela, saúco y cassis, acomplejadas por la vainilla que aporta el roble, también aparecen especies como el clavo de olor y la pimienta negra. Se detectan taninos dulces, robustos y sedosos de grata persistencia en boca.', 'Ideal para acompañar carnes rojas, quesos y salsas gustosas.', 11, 'image-1608410047260.png', 'datasheet-1608410047261.pdf', 1),
(8, 2, 1, 11, 2, 2018, 4, '3500.00', 10, 'De color amarillo intenso y muy brillante con reflejos verdosos. Delicado e intenso en nariz, con notas cítricas y flores de naranjos. Aromas a uva Torrontés.\r\nPosee el sabor característico de la uva Torrontés: cítrico, manzana verde y muy fresco. Balanceada acidez en boca y corazón dulce.', 'Compañero ideal de comidas étnicas, como la mexicana, peruana e incluso mariscos.', 7, 'image-1608482386442.png', 'datasheet-1608482386498.pdf', 1),
(9, 2, 1, 12, 5, 2017, 2, '4350.00', 15, 'De color amarillo dorado con tonalidades verdosas. En el aroma predomina la fruta, con sutiles notas de levadura.\r\nEn boca presenta muy buen cuerpo y textura, con un perlage persistente y delicado.', 'Se combina armónicamente con pastas con frutos de mar, postres dulces y frutos secos.', 1, 'image-1608495370161.png', 'datasheet-1608494823337.pdf', 2),
(10, 3, 3, 10, 2, 2018, 3, '1850.00', 10, 'Posee un color cereza brillante con reflejos azulados. Despliega delicados aromas a frutos rojos, ciruelas y especias. En boca, es intenso, fresco y aterciopelado.', 'Especial para acompañar carnes rojas y de caza; aves y quesos.', 7, 'image-1608586359574.png', 'datasheet-1608586359653.pdf', 1),
(11, 2, 2, 4, 2, 2018, 1, '1200.00', 30, 'De color amarillo palido con destellos verdozos. En nariz se precibe durazno blanco, mango y aromas citricos como el pomelo. En boca es sedozo, dúctil y cremoso.', 'Ideal para acompañar carnes blancas, pescado y frutos de mar.', 11, 'image-1608592147950.png', 'datasheet-1608592147955.pdf', 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `qualities`
--

CREATE TABLE `qualities` (
  `id` int(11) NOT NULL,
  `name` varchar(45) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `qualities`
--

INSERT INTO `qualities` (`id`, `name`) VALUES
(1, 'Reserva'),
(2, 'Clásico'),
(3, 'Tardío'),
(4, 'Brut'),
(5, 'Extra Brut');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `states`
--

CREATE TABLE `states` (
  `id` int(11) NOT NULL,
  `name` varchar(45) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `states`
--

INSERT INTO `states` (`id`, `name`) VALUES
(1, 'activo'),
(2, 'inactivo');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `temperatures`
--

CREATE TABLE `temperatures` (
  `id` int(11) NOT NULL,
  `value` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `temperatures`
--

INSERT INTO `temperatures` (`id`, `value`) VALUES
(1, 8),
(2, 9),
(3, 10),
(4, 11),
(5, 12),
(6, 13),
(7, 14),
(8, 15),
(9, 16),
(10, 17),
(11, 18);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `first_name` varchar(45) DEFAULT NULL,
  `last_name` varchar(45) DEFAULT NULL,
  `birthdate` date DEFAULT NULL,
  `address` varchar(45) DEFAULT NULL,
  `town` varchar(45) DEFAULT NULL,
  `country` varchar(45) DEFAULT NULL,
  `email` varchar(100) DEFAULT NULL,
  `password` varchar(250) DEFAULT NULL,
  `rol` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `users`
--

INSERT INTO `users` (`id`, `first_name`, `last_name`, `birthdate`, `address`, `town`, `country`, `email`, `password`, `rol`) VALUES
(1, 'Marina', 'Blanco', '1988-05-20', 'Sarmiento 95', 'Luján de Cuyo - Mendoza', 'Argentina', 'marivic_05@hotmail.com', '$2a$10$cYGIAjOSsJb/MbGZGtf2HuGDNUSnnunDbohTtOjwTX/oDdLaPtExu', 'particular'),
(2, 'Emilio', 'Juncos', '1988-03-26', 'Héroes de Vilcapugio 2435', 'Córdoba', 'Argentina', 'emilio.juncos1988@gmail.com', '$2a$10$qSIJUACghe12UfmYvonQjuy37lHy0lUOJRlxvrfUdONMD/dWtDF02', 'particular'),
(3, 'Marina', 'Blanco', '1988-05-20', 'Sarmiento ', 'Luján de Cuyo', 'Argentina', '', '$2a$10$fN7/uUrfsNkknZiMC9dxR.Y43J2W84/lBfbCeYuBYSwIWyZuXlJbm', 'administrador'),
(4, 'Marina', 'Blanco', '2020-05-20', 'Sarmiento 95', 'Luján de Cuyo', 'Argentina', 'marina@bodegaandalhue.com', '$2a$10$N2FwGdnsnFNMHOc4c1L4zuI7521I1CWyGJ7NqvGR4MCy0UhxQd5Hy', 'administrador'),
(5, 'Juan ', 'Viali ', '1989-11-26', 'Av. Monroe 50', 'Belgrano. Buenos Aires', 'Argentina', 'juanviali@gmail.com', '$2a$10$VQxl2zUbYtgO/PAYaT4eNu1GvKc0GIZ1jVB9Is/d00ns9/CMG3Kge', 'particular'),
(11, 'Emilio', 'Juncos', '1989-03-26', 'Héroes de Vilcapugio 2435', 'Córdoba', 'Argentina', 'emilio@bodegaandalhue.com', '$2a$10$dmwsQXOsfVX9oFb5MS5kSesQNVxoYJapN8HOWs382z0ogyA6A9HMy', 'administrador'),
(12, 'Martina', 'Torrez', '2001-03-16', 'Sarmiento 95', 'Luján de Cuyo', 'Argentina', 'martina@gmail.com', '$2a$10$Dx9MGIrmbOiodGpYO5uctu7qcmbrTAN/fZPyDD4gz2FlEuHpDhbdO', 'particular'),
(13, 'Paula', 'Juncos', '1988-04-15', 'Héroes de Vilcapugio 2435', 'Cordoba', 'Argentina', 'paula@gmail.com', '$2a$10$l45k0edxI4t5X9.WtxrLHOwiqG54FeBAb644LDH.wKsxY/oSA2x8i', 'particular'),
(14, 'Emilio', 'Perez', '2010-05-10', 'Boedo 226', 'Carrodilla', 'Argentina', 'emilio@yahoo.com', '$2a$10$lv3VkgsdOPvHph6d1B3nxeaFEx69ywzw/3Lzq013TOx/AuklHziRu', 'particular'),
(15, 'Victoria', 'Torrez', '1987-05-16', 'Boedo 2015', 'Carrodilla', 'Argentina', 'vicky@gmail.com', '$2a$10$7ts40x5itL0ttb81MeA1hOkQuNu65kO3uBd1pCNywc8emMO/yP68m', 'particular');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `varietals`
--

CREATE TABLE `varietals` (
  `id` int(11) NOT NULL,
  `name` varchar(45) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `varietals`
--

INSERT INTO `varietals` (`id`, `name`) VALUES
(1, 'Bonarda'),
(2, 'Cabernet Franc'),
(3, 'Cabernet Sauvignon'),
(4, 'Chardonnay'),
(5, 'Chenin'),
(6, 'Malbec'),
(7, 'Merlot'),
(8, 'Pinot Noir'),
(9, 'Sauvignon Blanc'),
(10, 'Syrah'),
(11, 'Torrontés'),
(12, 'Blend: Chardonnay – Pinot Noir'),
(13, 'Blend: Malbec – Bonarda'),
(14, 'Blend: Malbec – Cabernet'),
(15, 'Blend: Malbec – Syrah');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `brands`
--
ALTER TABLE `brands`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `carts`
--
ALTER TABLE `carts`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_user_id_idx` (`user_id`);

--
-- Indices de la tabla `cart_product`
--
ALTER TABLE `cart_product`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_cart_id_idx` (`cart_id`),
  ADD KEY `fk_product_id_idx` (`product_id`);

--
-- Indices de la tabla `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `displays`
--
ALTER TABLE `displays`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_cat_id_idx` (`cat_id`),
  ADD KEY `fk_brand_id_idx` (`brand_id`),
  ADD KEY `fk_varietal_id_idx` (`varietal_id`),
  ADD KEY `fk_quality_id_idx` (`quality_id`),
  ADD KEY `fk_display_id_idx` (`display_id`),
  ADD KEY `fk_temperatures_id_idx` (`temperature_id`),
  ADD KEY `fk_state_id_idx` (`state_id`) USING BTREE;

--
-- Indices de la tabla `qualities`
--
ALTER TABLE `qualities`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `states`
--
ALTER TABLE `states`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `temperatures`
--
ALTER TABLE `temperatures`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `varietals`
--
ALTER TABLE `varietals`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `brands`
--
ALTER TABLE `brands`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `carts`
--
ALTER TABLE `carts`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT de la tabla `cart_product`
--
ALTER TABLE `cart_product`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=30;

--
-- AUTO_INCREMENT de la tabla `categories`
--
ALTER TABLE `categories`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `displays`
--
ALTER TABLE `displays`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT de la tabla `products`
--
ALTER TABLE `products`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT de la tabla `qualities`
--
ALTER TABLE `qualities`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de la tabla `states`
--
ALTER TABLE `states`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `temperatures`
--
ALTER TABLE `temperatures`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT de la tabla `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT de la tabla `varietals`
--
ALTER TABLE `varietals`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `carts`
--
ALTER TABLE `carts`
  ADD CONSTRAINT `fk_user_id` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`);

--
-- Filtros para la tabla `cart_product`
--
ALTER TABLE `cart_product`
  ADD CONSTRAINT `fk_cart_id` FOREIGN KEY (`cart_id`) REFERENCES `carts` (`id`),
  ADD CONSTRAINT `fk_product_id` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`);

--
-- Filtros para la tabla `products`
--
ALTER TABLE `products`
  ADD CONSTRAINT `fk_brand_id` FOREIGN KEY (`brand_id`) REFERENCES `brands` (`id`),
  ADD CONSTRAINT `fk_cat_id` FOREIGN KEY (`cat_id`) REFERENCES `categories` (`id`),
  ADD CONSTRAINT `fk_display_id` FOREIGN KEY (`display_id`) REFERENCES `displays` (`id`),
  ADD CONSTRAINT `fk_quality_id` FOREIGN KEY (`quality_id`) REFERENCES `qualities` (`id`),
  ADD CONSTRAINT `fk_temperatures_id` FOREIGN KEY (`temperature_id`) REFERENCES `temperatures` (`id`),
  ADD CONSTRAINT `fk_varietal_id` FOREIGN KEY (`varietal_id`) REFERENCES `varietals` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
