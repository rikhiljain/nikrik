CREATE TABLE IF NOT EXISTS `policy_attributes` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `company_id` smallint(2) NOT NULL,
  `policy_type` varchar(20) NOT NULL,
  `plan` varchar(20) DEFAULT NULL,
  `attrib_name` varchar(255) NOT NULL,
  `attrib_value` varchar(100) NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  PRIMARY KEY (`id`)
);
