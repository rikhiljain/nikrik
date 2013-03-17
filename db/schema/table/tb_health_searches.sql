CREATE TABLE IF NOT EXISTS `health_searches` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `no_of_childs` smallint(2) DEFAULT NULL,
  `adult_age` smallint(3) DEFAULT NULL,
  `father_age` smallint(3) DEFAULT NULL,
  `mother_age` smallint(3) DEFAULT NULL,
  `health_cover` int(11) NOT NULL,
  `policy_for` smallint(2) NOT NULL,
  `name` varchar(30) DEFAULT NULL,
  `email_id` varchar(50) DEFAULT NULL,
  `mobile_number` int(11) DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  `company_name` varchar(20) DEFAULT NULL,
  `final_premium` int(11) DEFAULT NULL, 
  `created_at` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ;