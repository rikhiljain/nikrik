-- phpMyAdmin SQL Dump
-- version 3.5.1
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Mar 03, 2013 at 09:35 AM
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
-- Dumping data for table `policies`
--

INSERT INTO `policies` (`id`, `policy_id`, `policy_type`, `user_id`, `company_id`, `start_date`, `end_date`, `premium`, `discount`, `policy_path`, `created_at`, `updated_at`) VALUES
(1, 0, 'MOTOR', 2, 1, '2013-02-02', '2014-02-21', 1000, 10, 'C:/personal/learnings/github/nikrik/nikrik/uploads/motor/2013/2/ICICI/0_1.pdf', '2013-02-21 15:14:56', '2013-02-21 15:14:56');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
