-- phpMyAdmin SQL Dump
-- version 3.5.8.1deb1
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Oct 22, 2013 at 02:16 PM
-- Server version: 5.5.32-0ubuntu0.13.04.1
-- PHP Version: 5.4.9-4ubuntu2.3

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
-- Table structure for table `companies`
--

CREATE TABLE IF NOT EXISTS `companies` (
  `id` smallint(6) NOT NULL AUTO_INCREMENT,
  `name` varchar(20) DEFAULT NULL,
  `created_at` datetime NOT NULL,
  `is_health` tinyint(1) DEFAULT NULL,
  `is_motor` tinyint(1) DEFAULT NULL,
  `is_travel` tinyint(1) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=14 ;

-- --------------------------------------------------------

--
-- Table structure for table `complaints`
--

CREATE TABLE IF NOT EXISTS `complaints` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `product` varchar(10) NOT NULL,
  `subject` varchar(100) DEFAULT NULL,
  `message` varchar(2000) DEFAULT NULL,
  `email` varchar(50) DEFAULT NULL,
  `mobile` varchar(11) DEFAULT NULL,
  `name` varchar(30) DEFAULT NULL,
  `created_at` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=9849 ;

-- --------------------------------------------------------

--
-- Table structure for table `contact_us`
--

CREATE TABLE IF NOT EXISTS `contact_us` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `product` varchar(10) DEFAULT NULL,
  `name` varchar(100) DEFAULT NULL,
  `address` varchar(250) DEFAULT NULL,
  `message` varchar(1000) DEFAULT NULL,
  `email` varchar(50) DEFAULT NULL,
  `mobile` varchar(11) DEFAULT NULL,
  `created_at` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=3 ;

-- --------------------------------------------------------

--
-- Table structure for table `delayed_jobs`
--

CREATE TABLE IF NOT EXISTS `delayed_jobs` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `priority` int(11) DEFAULT '0',
  `attempts` int(11) DEFAULT '0',
  `handler` text,
  `last_error` text,
  `run_at` datetime DEFAULT NULL,
  `locked_at` datetime DEFAULT NULL,
  `failed_at` datetime DEFAULT NULL,
  `locked_by` varchar(100) DEFAULT NULL,
  `queue` varchar(100) DEFAULT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `delayed_jobs_priority` (`priority`,`run_at`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Table structure for table `health_charts`
--

CREATE TABLE IF NOT EXISTS `health_charts` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `company_id` smallint(2) NOT NULL,
  `plan` varchar(30) DEFAULT NULL,
  `coverage` int(11) DEFAULT NULL,
  `age_start` smallint(3) DEFAULT NULL,
  `age_end` smallint(3) DEFAULT NULL,
  `adults` smallint(2) NOT NULL DEFAULT '0',
  `childs` smallint(2) NOT NULL DEFAULT '0',
  `premium` int(11) DEFAULT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=8780 ;

-- --------------------------------------------------------

--
-- Table structure for table `health_searches`
--

CREATE TABLE IF NOT EXISTS `health_searches` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `no_of_childs` smallint(2) DEFAULT NULL,
  `adult_age` smallint(3) DEFAULT NULL,
  `father_age` smallint(3) DEFAULT NULL,
  `mother_age` smallint(3) DEFAULT NULL,
  `health_cover` int(11) NOT NULL,
  `policy_for` smallint(6) NOT NULL,
  `name` varchar(30) DEFAULT NULL,
  `email_id` varchar(50) DEFAULT NULL,
  `mobile_number` int(11) DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  `company_name` varchar(20) DEFAULT NULL,
  `plan` varchar(20) DEFAULT NULL,
  `final_premium` int(11) DEFAULT NULL,
  `created_at` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=36 ;

-- --------------------------------------------------------

--
-- Table structure for table `idv_charts`
--

CREATE TABLE IF NOT EXISTS `idv_charts` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `maker` varchar(20) DEFAULT NULL,
  `model` varchar(20) DEFAULT NULL,
  `subtype` varchar(20) DEFAULT NULL,
  `seats` smallint(6) DEFAULT NULL,
  `cubic` smallint(6) DEFAULT NULL,
  `fuel` char(1) DEFAULT NULL,
  `age_0_6` int(11) DEFAULT NULL,
  `age_6_12` int(11) DEFAULT NULL,
  `age_12_24` int(11) DEFAULT NULL,
  `age_24_36` int(11) DEFAULT NULL,
  `age_36_48` int(11) DEFAULT NULL,
  `age_48_60` int(11) DEFAULT NULL,
  `age_60_72` int(11) DEFAULT NULL,
  `age_72_84` int(11) DEFAULT NULL,
  `age_84_96` int(11) DEFAULT NULL,
  `age_96` int(11) DEFAULT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=1439 ;

-- --------------------------------------------------------

--
-- Table structure for table `motor_discounts`
--

CREATE TABLE IF NOT EXISTS `motor_discounts` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `idv_chart_id` int(11) DEFAULT NULL,
  `company_id` smallint(2) DEFAULT NULL,
  `dis_year_0` float NOT NULL DEFAULT '0',
  `dis_year_1` float NOT NULL DEFAULT '0',
  `dis_year_2` float NOT NULL DEFAULT '0',
  `dis_year_3` float NOT NULL DEFAULT '0',
  `dis_year_4` float NOT NULL DEFAULT '0',
  `dis_year_5` float NOT NULL DEFAULT '0',
  `dis_year_6` float NOT NULL DEFAULT '0',
  `dis_year_7` float NOT NULL DEFAULT '0',
  `dis_year_8` float NOT NULL DEFAULT '0',
  `rto_id` mediumint(6) NOT NULL DEFAULT '0',
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=11505 ;

-- --------------------------------------------------------

--
-- Table structure for table `motor_searches`
--

CREATE TABLE IF NOT EXISTS `motor_searches` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `new_policy` tinyint(1) DEFAULT NULL,
  `policy_exp_date` date DEFAULT NULL,
  `year_of_manufacture` year(4) DEFAULT NULL,
  `idv_chart_id` mediumint(6) DEFAULT NULL,
  `register_type` char(1) NOT NULL,
  `register_date` date DEFAULT NULL,
  `rto_id` mediumint(6) NOT NULL,
  `has_claim` tinyint(1) DEFAULT NULL,
  `ncb` smallint(2) DEFAULT NULL,
  `elec_acc` int(11) DEFAULT NULL,
  `non_elec_acc` int(11) DEFAULT NULL,
  `cng_type` varchar(10) DEFAULT NULL,
  `cng_value` int(11) DEFAULT NULL,
  `passenger_coverage_amt` int(11) DEFAULT NULL,
  `has_anti_theft` tinyint(1) DEFAULT NULL,
  `has_full_cover` tinyint(1) DEFAULT NULL,
  `is_aai_member` tinyint(1) DEFAULT NULL,
  `name` varchar(30) DEFAULT NULL,
  `email_id` varchar(50) DEFAULT NULL,
  `mobile_number` int(11) DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  `company_name` varchar(20) DEFAULT NULL,
  `final_premium` int(11) DEFAULT NULL,
  `created_at` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=18 ;

-- --------------------------------------------------------

--
-- Table structure for table `orders`
--

CREATE TABLE IF NOT EXISTS `orders` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `reward_id` int(11) DEFAULT NULL,
  `user_id` int(11) DEFAULT NULL,
  `name` varchar(30) DEFAULT NULL,
  `mobile` varchar(11) DEFAULT NULL,
  `address` varchar(250) DEFAULT NULL,
  `status` varchar(20) DEFAULT NULL,
  `points` mediumint(6) DEFAULT NULL,
  `desc` varchar(100) DEFAULT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Table structure for table `points`
--

CREATE TABLE IF NOT EXISTS `points` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) DEFAULT NULL,
  `ref_type` varchar(10) DEFAULT NULL,
  `ref_id` int(11) DEFAULT NULL,
  `value` int(11) DEFAULT NULL,
  `desc` varchar(250) DEFAULT NULL,
  `status` varchar(20) DEFAULT NULL,
  `exp_dt` datetime DEFAULT NULL,
  `created_at` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=2 ;

-- --------------------------------------------------------

--
-- Table structure for table `policies`
--

CREATE TABLE IF NOT EXISTS `policies` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `policy_id` int(11) DEFAULT NULL,
  `policy_type` varchar(20) DEFAULT NULL,
  `user_id` int(11) DEFAULT NULL,
  `company_id` smallint(6) DEFAULT NULL,
  `start_date` datetime DEFAULT NULL,
  `end_date` datetime DEFAULT NULL,
  `premium` int(11) DEFAULT NULL,
  `discount` int(11) DEFAULT NULL,
  `policy_path` varchar(255) DEFAULT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=2 ;

-- --------------------------------------------------------

--
-- Table structure for table `policy_attributes`
--

CREATE TABLE IF NOT EXISTS `policy_attributes` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `company_id` smallint(2) DEFAULT NULL,
  `policy_type` varchar(10) DEFAULT NULL,
  `plan` varchar(30) DEFAULT NULL,
  `order_num` smallint(2) NOT NULL DEFAULT '99',
  `attrib_name` varchar(100) DEFAULT NULL,
  `attrib_value` varchar(100) DEFAULT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=660 ;

-- --------------------------------------------------------

--
-- Table structure for table `policy_types`
--

CREATE TABLE IF NOT EXISTS `policy_types` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(20) DEFAULT NULL,
  `created_at` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=4 ;

-- --------------------------------------------------------

--
-- Table structure for table `referrals`
--

CREATE TABLE IF NOT EXISTS `referrals` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) DEFAULT NULL,
  `email` varchar(50) DEFAULT NULL,
  `mobile` varchar(10) DEFAULT NULL,
  `ref_name` varchar(30) DEFAULT NULL,
  `ref_mobile` varchar(10) DEFAULT NULL,
  `ref_desc` varchar(1000) DEFAULT NULL,
  `amount` int(11) DEFAULT NULL,
  `points` mediumint(6) DEFAULT NULL,
  `status` varchar(20) NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Table structure for table `rewards`
--

CREATE TABLE IF NOT EXISTS `rewards` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) DEFAULT NULL,
  `details` varchar(50) DEFAULT NULL,
  `description` varchar(4000) NOT NULL,
  `points` int(11) DEFAULT NULL,
  `image_name` varchar(50) DEFAULT NULL,
  `status` varchar(20) DEFAULT NULL,
  `start_date` date DEFAULT NULL,
  `end_date` date DEFAULT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=7 ;

-- --------------------------------------------------------

--
-- Table structure for table `roles`
--

CREATE TABLE IF NOT EXISTS `roles` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(10) NOT NULL,
  `resource_id` int(11) DEFAULT NULL,
  `resource_type` varchar(10) DEFAULT NULL,
  `created_at` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `index_roles_on_name` (`name`),
  KEY `index_roles_on_name_and_resource_type_and_resource_id` (`name`,`resource_type`,`resource_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=157 ;

-- --------------------------------------------------------

--
-- Table structure for table `rtos`
--

CREATE TABLE IF NOT EXISTS `rtos` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `code` char(2) DEFAULT NULL,
  `sub_code` char(2) DEFAULT NULL,
  `city` varchar(30) DEFAULT NULL,
  `state` varchar(20) DEFAULT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=915 ;

-- --------------------------------------------------------

--
-- Table structure for table `static_htmls`
--

CREATE TABLE IF NOT EXISTS `static_htmls` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `query_key` varchar(100) NOT NULL,
  `query_value` mediumtext NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `key` (`query_key`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=5 ;

-- --------------------------------------------------------

--
-- Table structure for table `travel_charts`
--

CREATE TABLE IF NOT EXISTS `travel_charts` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `company_id` smallint(2) DEFAULT NULL,
  `policy_for` char(2) DEFAULT NULL,
  `trip_type` char(1) NOT NULL,
  `max_trip_duration` smallint(3) NOT NULL DEFAULT '0',
  `coverage` int(11) DEFAULT NULL,
  `age_start` smallint(3) DEFAULT NULL,
  `age_end` smallint(3) DEFAULT NULL,
  `plan` varchar(30) DEFAULT NULL,
  `duration_start` smallint(4) DEFAULT NULL,
  `duration_end` smallint(4) DEFAULT NULL,
  `has_usa` tinyint(1) DEFAULT NULL,
  `adult` tinyint(1) DEFAULT NULL,
  `child` tinyint(1) DEFAULT NULL,
  `premium` int(11) DEFAULT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=13766 ;

-- --------------------------------------------------------

--
-- Table structure for table `travel_members`
--

CREATE TABLE IF NOT EXISTS `travel_members` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `relationship` varchar(30) NOT NULL,
  `age` smallint(6) NOT NULL,
  `search_id` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Table structure for table `travel_searches`
--

CREATE TABLE IF NOT EXISTS `travel_searches` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `age` smallint(3) NOT NULL,
  `location` char(1) NOT NULL,
  `travel_cover` int(11) NOT NULL,
  `policy_for` char(1) NOT NULL,
  `trip_type` char(1) NOT NULL,
  `max_trip_duration` smallint(3) NOT NULL DEFAULT '0',
  `start_date` date DEFAULT NULL,
  `end_date` date DEFAULT NULL,
  `name` varchar(30) DEFAULT NULL,
  `email_id` varchar(50) DEFAULT NULL,
  `mobile_number` int(11) DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  `company_name` varchar(20) DEFAULT NULL,
  `plan` varchar(20) DEFAULT NULL,
  `final_premium` int(11) DEFAULT NULL,
  `created_at` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=23 ;

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE IF NOT EXISTS `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `email` varchar(50) NOT NULL DEFAULT '',
  `encrypted_password` varchar(255) NOT NULL DEFAULT '',
  `reset_password_token` varchar(255) DEFAULT NULL,
  `reset_password_sent_at` datetime DEFAULT NULL,
  `remember_created_at` datetime DEFAULT NULL,
  `sign_in_count` int(11) DEFAULT '0',
  `current_sign_in_at` datetime DEFAULT NULL,
  `last_sign_in_at` datetime DEFAULT NULL,
  `current_sign_in_ip` varchar(30) DEFAULT NULL,
  `last_sign_in_ip` varchar(30) DEFAULT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  `name` varchar(50) DEFAULT NULL,
  `mobile` varchar(11) DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  `provider` varchar(20) DEFAULT NULL,
  `uid` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `index_users_on_email` (`email`),
  UNIQUE KEY `index_users_on_reset_password_token` (`reset_password_token`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=6 ;

-- --------------------------------------------------------

--
-- Table structure for table `users_roles`
--

CREATE TABLE IF NOT EXISTS `users_roles` (
  `user_id` int(11) DEFAULT NULL,
  `role_id` int(11) DEFAULT NULL,
  KEY `index_users_roles_on_user_id_and_role_id` (`user_id`,`role_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
