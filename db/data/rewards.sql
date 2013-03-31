-- phpMyAdmin SQL Dump
-- version 3.5.1
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Mar 03, 2013 at 09:36 AM
-- Server version: 5.5.24-log
-- PHP Version: 5.4.3

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `nikrik`
--

--
-- Dumping data for table `rewards`
--

INSERT INTO `rewards` (`id`, `name`, `details`, `description`, `points`, `image_name`, `status`, `start_date`, `end_date`, `created_at`, `updated_at`) VALUES
(1, 'Best lunch box set', 'Tupperware best lunch box set worth Rs 770', 'This is a quality product from tupperware. ', 770, 'tupperware_best_lunch.png', 'ACTIVE', NULL, NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(2, 'Car Vaccum Cleaner', 'Car vaccum cleaner worth Rs 800.', 'This will help you to keep your car clean and tidy.', 800, 'car_vaccum.png', 'ACTIVE', NULL, NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(3, 'Tupperware bottle set', 'Bottle set worth Rs 800', 'These bottles are made from grade 1 plastic.', 800, 'tupperware_bottles.png', 'ACTIVE', NULL, NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(4, 'Sodexo gift pass', 'Gift pass worth Rs 1000', 'Sodexo gift pass worth Rs 1000', 1000, 'sodexo.png', 'ACTIVE', NULL, NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(5, 'Classic lunch box set', 'Tupperware classic lunch box set worth Rs 470', 'This is a quality product from tupperware.', 470, 'tupperware_classic_lunch.png', 'ACTIVE', NULL, NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(6, 'Executive lunch box set', 'Tupperware executive lunch box set worth Rs 900', 'This is a quality product from tupperware.', 900, 'tupperware_executive_lunch.png', 'ACTIVE', NULL, NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
