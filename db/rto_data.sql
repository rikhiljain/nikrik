-- phpMyAdmin SQL Dump
-- version 3.4.5
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Dec 09, 2012 at 08:49 PM
-- Server version: 5.5.16
-- PHP Version: 5.3.8

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `nikrik`
--

-- --------------------------------------------------------

--
-- Table structure for table `rtos`
--

CREATE TABLE IF NOT EXISTS `rtos` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `code` varchar(255) DEFAULT NULL,
  `sub_code` varchar(255) DEFAULT NULL,
  `city` varchar(255) DEFAULT NULL,
  `state` varchar(255) DEFAULT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=10 ;

--
-- Dumping data for table `rtos`
--

INSERT INTO `rtos` (`id`, `code`, `sub_code`, `city`, `state`, `created_at`, `updated_at`) VALUES
(1, 'DL', NULL, '', 'Delhi', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(2, 'UP', '14', 'Ghaziabad', 'Uttar Pradesh', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(3, 'UP', '15', 'Meerut', 'Uttar Pradesh', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(4, 'UP', '16', 'Noida', 'Uttar Pradesh', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(5, 'UP', '12', 'Muzaffarnagar', 'Uttar Pradesh', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(6, 'UP', '21', 'Moradabad', 'Uttar Pradesh', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(7, 'UP', '22', 'Rampur', 'Uttar Pradesh', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(8, 'UP', '32', 'Lucknow', 'Uttar Pradesh', '0000-00-00 00:00:00', '0000-00-00 00:00:00');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
