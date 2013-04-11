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
);