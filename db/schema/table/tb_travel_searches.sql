CREATE TABLE IF NOT EXISTS `travel_searches` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `age` smallint(3) NOT NULL,
  `location` char(1) NOT NULL,
  `travel_cover` int(11) NOT NULL,
  `policy_for` char(1) NOT NULL,
  `start_date` date DEFAULT NULL,
  `end_date` date DEFAULT NULL,
  `name` varchar(30) DEFAULT NULL,
  `email_id` varchar(50) DEFAULT NULL,
  `mobile_number` int(11) DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  `company_name` varchar(20) DEFAULT NULL,
  `final_premium` int(11) DEFAULT NULL, 
  `created_at` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ;