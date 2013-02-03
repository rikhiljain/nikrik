CREATE TABLE IF NOT EXISTS `rewards` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) DEFAULT NULL,
  `details` varchar(1000) DEFAULT NULL,
  `points` int(11) DEFAULT NULL,
  `image_name` varchar(50) DEFAULT NULL,
  `status` varchar(20) DEFAULT NULL,
  `start_date` date DEFAULT NULL,
  `end_date` date DEFAULT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ;
