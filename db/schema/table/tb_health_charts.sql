CREATE TABLE IF NOT EXISTS `health_charts` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `company_id` smallint(2) NOT NULL,
  `plan` varchar(20) NOT NULL,
  `coverage` int(11) DEFAULT NULL,
  `age_start` smallint(3) DEFAULT NULL,
  `age_end` smallint(3) DEFAULT NULL,
  `premium` int(11) DEFAULT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ;
