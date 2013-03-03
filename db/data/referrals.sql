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
-- Dumping data for table `referrals`
--

INSERT INTO `referrals` (`id`, `user_id`, `email`, `mobile`, `ref_name`, `ref_mobile`, `ref_desc`, `amount`, `status`, `created_at`, `updated_at`) VALUES
(1, 2, 'nikhil.pa@gmail.com', '9873813311', 'Rikhil', '9717996490', ' abc', NULL, 'OPEN', '2013-02-23 06:32:21', '2013-02-23 06:32:21'),
(2, 2, 'abc@gmail.com', '123', 'Abc', '123', ' abc', NULL, 'OPEN', '2013-02-23 08:44:47', '2013-02-23 08:44:47'),
(3, NULL, 'nikhil.pa@gmail.com', '1234567890', 'abc', '1234567890', 'abc', NULL, 'OPEN', '2013-03-03 07:01:29', '2013-03-03 07:01:29');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
