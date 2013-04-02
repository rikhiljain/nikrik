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
(1, 'Best lunch box set', 'Tupperware best lunch box set worth Rs 770', '<p><strong>Tupperware Best Lunch Box</strong></p>\n<ul>\n<li>Tupperware Best Lunch Box Comes in Grey, Red, Yellow color with 3 Diff Chest Print Option per Pack, Straight Bottom & Short Fit Free Utility Pack for Your Extra needs.</li>\n<li>Its Insulated Bag has square sway- Convenient, handy size.</li>\n<li>2 tropical cups- Allows you to pack a complete, wholesome meal.</li>\n<li>Tumbler- Liquid tight.</li>\n<li>Best lunch bag- Smart spacious lunch kit, can carry an additional spoon, napkin or any other important items.</li>\n<li>Name card- Easy to identify among other users.</li>\n<li>Capacity- Tropical cup- 230 ml. Square away- 400 ml. Tumbler- 340 ml.</li>\n</ul>', 770, 'tupperware_best_lunch.png', 'ACTIVE', NULL, NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(2, 'Car Vaccum Cleaner', 'Car vaccum cleaner worth Rs 800.', '<p><strong>Car Vacuum Cleaner</strong></p>\n<p><strong>Technical Specifications</strong></p>\n<ul>\n<li>Allows You To Clean Darkest Corner Of Your Car.</li>\n<li>Flexible Tube For Cleaning Corner.</li>\n<li>Durable ABS plastic housing.</li>\n<li>Wide Crevice Tool Attachemnt.</li>\n<li>Extra long power cord.</li>\n<li>Allows complete access to the entire interior of your car.</li>\n<li>Easy to Use & Handle the Product.</li>\n<li>12V power supply.</li>', 800, 'car_vaccum.png', 'ACTIVE', NULL, NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(3, 'Tupperware bottle set', 'Bottle set worth Rs 800', '<p><strong>Aquasafe Bottle 1L</strong></p>\n<p>Medium – 9.2cm (D) x 24.4 cm (H), capacity – 890 ml Slimline 11.8 cm (L) x 11.8 cm (W) x 28.4 cm</p>\n<p><strong>Features & Benefits</strong></p>\n<ul>\n<li>A versatile and virtually liquid-tight bottle that makes storing cold beverages at home or outdoors easy.</li>\n<li>Ergonomically-designed, lightweight and compact.</li>\n<li>Cap on spout is removable and easy to clean.</li>\n<li>Moderate height of spout makes pouring easy.</li>\n<li>Bottle fits snugly in the refrigerator door pocket.</li>\n<li>Cap comes with tab for easy opening and sealing.</li>\n</ul>', 800, 'tupperware_bottles.png', 'ACTIVE', NULL, NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(4, 'Sodexo gift pass', 'Gift pass worth Rs 1000', '<p><strong>Sodexo Gift Pass</strong></p>\n<p>Widely accepted Gift voucher in India with more than 9000 affiliated member establishments in 300 cities.</p>\n<p>Sodexho Gift Pass is accepted to purchase an equivalent value of products or services from the affiliated partners.</p>\n<p>Sodexho regular Gift Pass are accepted for thousands of categories like Electronics, Home needs, Books, Music, jewelry, Groceries, Optical, Foot wear, Restaurants & Hotels, Multi product Stores, Baby care and many more.</p>', 1000, 'sodexo.png', 'ACTIVE', NULL, NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(5, 'Classic lunch box set', 'Tupperware classic lunch box set worth Rs 470', '<p><strong>Executive Lunch</strong></p>\n<p>Small Bowl – 11.6 cm (D) x 3.4 cm (H), capacity – 180 ml</p>\n<p>Large Bowl – 11.6 cm (D) x 8.0 cm (H), capacity – 450 ml</p>\n<p><strong>Features & Benefits</strong></p>\n<ul>\n<li>Classic round liquid-tight seal prevents spillage of curries.</li>\n<li>Four bowls allow you to pack a complete lunch.</li>\n</ul>', 470, 'tupperware_classic_lunch.png', 'ACTIVE', NULL, NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(6, 'Executive lunch box set', 'Tupperware executive lunch box set worth Rs 900', '<p><strong>Tupperware Executive Lunch( Including Bag Worth 135/-)</strong></p>\n<p>The Executive Lunch Set by Tupperware is perfect for working adults or for family outings. The four bowls allow you to pack a complete lunch consisting of chapati, sabzi, dal and rice. The classic round liquid-tight seal prevents spillage of curries. It maintains the original freshness and flavours of the food leaving a great taste when you have lunch hours after packing.\n</p>', 900, 'tupperware_executive_lunch.png', 'ACTIVE', NULL, NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
