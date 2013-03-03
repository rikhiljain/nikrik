-- phpMyAdmin SQL Dump
-- version 3.5.1
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Mar 03, 2013 at 09:34 AM
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
-- Dumping data for table `points`
--

INSERT INTO `points` (`id`, `user_id`, `ref_type`, `ref_id`, `value`, `status`, `exp_dt`, `created_at`) VALUES
(1, 2, 'SELF', NULL, 100, 'EARNED', '0000-00-00 00:00:00', '2013-02-24 00:00:00'),
(2, 2, 'REFERRAL', 2, 200, 'EARNED', NULL, '2013-02-24 00:00:00'),
(3, 2, 'SELF', NULL, 50, 'USED', NULL, '2013-02-24 00:00:00');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
