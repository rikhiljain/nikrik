CREATE TABLE IF NOT EXISTS `motor_policies` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `policy_id` int(11) DEFAULT NULL,
  `policy_type` varchar(20) DEFAULT NULL,
  `user_id` int(11) DEFAULT NULL,
  `company_id` smallint(6) DEFAULT NULL,
  `start_date` date DEFAULT NULL,
  `end_date` date DEFAULT NULL,
  `premium` int(11) DEFAULT NULL,
  `discount` int(11) DEFAULT NULL,
  `policy_path` varchar(255) DEFAULT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 ;
