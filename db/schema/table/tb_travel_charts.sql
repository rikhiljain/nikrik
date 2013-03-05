CREATE TABLE IF NOT EXISTS `travel_charts` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `company_id` smallint(2) DEFAULT NULL,
  `coverage` int(11) DEFAULT NULL,
  `age_start` smallint(2) DEFAULT NULL,
  `age_end` smallint(3) DEFAULT NULL,
  `plan` char(2) DEFAULT NULL,
  `days` smallint(3) DEFAULT NULL,
  `has_usa` tinyint(1) DEFAULT NULL,
  `premium` int(11) DEFAULT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ;