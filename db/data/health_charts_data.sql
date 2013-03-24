-- phpMyAdmin SQL Dump
-- version 3.4.5
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Mar 24, 2013 at 06:46 AM
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

--
-- Dumping data for table `health_charts`
--

INSERT INTO `health_charts` (`id`, `company_id`, `coverage`, `age_start`, `age_end`, `premium`, `created_at`, `updated_at`) VALUES
(1, 2, 200000, 0, 25, 2338, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(2, 2, 200000, 26, 40, 3283, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(3, 2, 200000, 41, 45, 4309, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(4, 2, 200000, 46, 55, 6703, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(5, 2, 200000, 56, 60, 10260, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(6, 2, 200000, 61, 65, 11800, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(7, 2, 300000, 0, 25, 3306, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(8, 2, 300000, 26, 40, 4430, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(9, 2, 300000, 41, 45, 6065, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(10, 2, 300000, 46, 55, 8380, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(11, 2, 300000, 56, 60, 12826, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(12, 2, 300000, 61, 65, 14749, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(13, 2, 400000, 0, 25, 4332, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(14, 2, 400000, 26, 40, 5130, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(15, 2, 400000, 41, 45, 7820, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(16, 2, 400000, 46, 55, 12499, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(17, 2, 400000, 56, 60, 14999, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(18, 2, 400000, 61, 65, 17249, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(19, 2, 500000, 0, 25, 5244, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(20, 2, 500000, 25, 40, 6156, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(21, 2, 500000, 41, 45, 9576, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(22, 2, 500000, 46, 55, 15236, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(23, 2, 500000, 56, 60, 17879, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(24, 2, 500000, 61, 65, 20561, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(25, 2, 750000, 0, 25, 6688, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(26, 2, 750000, 26, 40, 8945, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(27, 2, 750000, 41, 45, 11683, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(28, 2, 750000, 46, 55, 18588, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(29, 2, 1000000, 0, 25, 8160, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(30, 2, 1000000, 26, 40, 10913, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(31, 2, 1000000, 41, 45, 14252, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(32, 2, 1000000, 46, 55, 23708, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(33, 1, 200000, 6, 20, 2871, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(34, 1, 200000, 21, 25, 2871, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(35, 1, 200000, 26, 35, 4306, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(36, 1, 200000, 36, 45, 5663, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(37, 1, 200000, 46, 50, 8890, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(38, 1, 200000, 51, 55, 12214, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(39, 1, 200000, 56, 60, 16865, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(40, 1, 200000, 61, 65, 22547, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(41, 1, 200000, 66, 70, 28172, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(42, 1, 200000, 71, 75, 31343, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(43, 1, 200000, 76, 80, 36024, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(44, 1, 200000, 81, 100, 55479, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(45, 1, 300000, 6, 20, 3313, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(46, 1, 300000, 21, 25, 3313, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(47, 1, 300000, 26, 35, 4775, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(48, 1, 300000, 36, 45, 6236, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(49, 1, 300000, 46, 50, 10454, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(50, 1, 300000, 51, 55, 14482, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(51, 1, 300000, 56, 60, 20031, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(52, 1, 300000, 61, 65, 26609, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(53, 1, 300000, 66, 70, 33217, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(54, 1, 300000, 71, 75, 36989, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(55, 1, 300000, 76, 80, 42532, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(56, 1, 300000, 81, 100, 65975, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(57, 1, 400000, 6, 20, 3801, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(58, 1, 400000, 21, 25, 3801, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(59, 1, 400000, 26, 35, 5911, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(60, 1, 400000, 36, 45, 7519, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(61, 1, 400000, 46, 50, 11231, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(62, 1, 400000, 51, 55, 15634, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(63, 1, 400000, 56, 60, 21644, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(64, 1, 400000, 61, 65, 28646, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(65, 1, 400000, 66, 70, 35739, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(66, 1, 400000, 71, 75, 39819, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(67, 1, 400000, 76, 80, 45797, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(68, 1, 400000, 81, 100, 71339, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(69, 1, 500000, 6, 20, 4039, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(70, 1, 500000, 21, 25, 4039, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(71, 1, 500000, 26, 35, 6195, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(72, 1, 500000, 36, 45, 7902, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(73, 1, 500000, 46, 50, 11834, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(74, 1, 500000, 51, 55, 16528, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(75, 1, 500000, 56, 60, 22896, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(76, 1, 500000, 61, 65, 30226, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(77, 1, 500000, 66, 70, 37696, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(78, 1, 500000, 71, 75, 42014, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(79, 1, 500000, 76, 80, 48329, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(80, 1, 500000, 81, 100, 75499, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(81, 1, 700000, 6, 20, 11575, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(82, 1, 700000, 21, 25, 11575, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(83, 1, 700000, 26, 35, 13608, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(84, 1, 700000, 36, 45, 15464, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(85, 1, 700000, 46, 50, 19729, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(86, 1, 700000, 51, 55, 24861, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(87, 1, 700000, 56, 60, 31769, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(88, 1, 700000, 61, 65, 39593, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(89, 1, 700000, 66, 70, 47631, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(90, 1, 700000, 71, 75, 52309, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(91, 1, 700000, 76, 80, 59133, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(92, 1, 700000, 81, 100, 88758, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(93, 1, 1000000, 6, 20, 11814, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(94, 1, 1000000, 21, 25, 11814, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(95, 1, 1000000, 26, 35, 14062, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(96, 1, 1000000, 36, 45, 16076, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(97, 1, 1000000, 46, 50, 20693, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(98, 1, 1000000, 51, 55, 26289, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(99, 1, 1000000, 56, 60, 33770, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(100, 1, 1000000, 61, 65, 42119, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(101, 1, 1000000, 66, 70, 50759, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(102, 1, 1000000, 71, 75, 55817, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(103, 1, 1000000, 76, 80, 63181, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(104, 1, 1000000, 81, 100, 95407, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(105, 1, 1500000, 6, 20, 20483, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(106, 1, 1500000, 21, 25, 20483, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(107, 1, 1500000, 26, 35, 23272, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(108, 1, 1500000, 36, 45, 25795, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(109, 1, 1500000, 46, 50, 29353, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(110, 1, 1500000, 51, 55, 35477, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(111, 1, 1500000, 56, 60, 43609, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(112, 1, 1500000, 61, 65, 62040, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(113, 1, 1500000, 66, 70, 73696, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(114, 1, 1500000, 71, 75, 85837, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(115, 1, 1500000, 76, 80, 96607, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(116, 1, 1500000, 81, 100, 144105, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(117, 1, 2000000, 6, 20, 20759, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(118, 1, 2000000, 21, 25, 20759, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(119, 1, 2000000, 26, 35, 23693, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(120, 1, 2000000, 36, 45, 26362, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(121, 1, 2000000, 46, 50, 30130, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(122, 1, 2000000, 51, 55, 36629, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(123, 1, 2000000, 56, 60, 45223, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(124, 1, 2000000, 61, 65, 64586, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(125, 1, 2000000, 66, 70, 76848, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(126, 1, 2000000, 71, 75, 89657, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(127, 1, 2000000, 76, 80, 101014, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(128, 1, 2000000, 81, 100, 151345, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(129, 1, 3000000, 6, 20, 21147, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(130, 1, 3000000, 21, 25, 21147, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(131, 1, 3000000, 26, 35, 24286, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(132, 1, 3000000, 36, 45, 27162, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(133, 1, 3000000, 46, 50, 31226, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(134, 1, 3000000, 51, 55, 38253, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(135, 1, 3000000, 56, 60, 47497, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(136, 1, 3000000, 61, 65, 68174, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(137, 1, 3000000, 66, 70, 81292, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(138, 1, 3000000, 71, 75, 95041, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(139, 1, 3000000, 76, 80, 107226, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(140, 1, 3000000, 81, 100, 161551, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(141, 1, 5000000, 6, 20, 21637, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(142, 1, 5000000, 21, 25, 21637, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(143, 1, 5000000, 26, 35, 25034, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(144, 1, 5000000, 36, 45, 28169, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(145, 1, 5000000, 46, 50, 32606, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(146, 1, 5000000, 51, 55, 40299, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(147, 1, 5000000, 56, 60, 50363, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(148, 1, 5000000, 61, 65, 72695, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(149, 1, 5000000, 66, 70, 86891, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(150, 1, 5000000, 71, 75, 101825, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(151, 1, 5000000, 76, 80, 115053, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(152, 1, 5000000, 81, 100, 174408, '0000-00-00 00:00:00', '0000-00-00 00:00:00');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
