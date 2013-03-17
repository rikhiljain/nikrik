CREATE TABLE IF NOT EXISTS `travel_charts` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `company_id` smallint(2) DEFAULT NULL,
  `policy_for` char(2) DEFAULT NULL,
  `trip_type` char(1) NOT NULL,
  `max_trip_duration` smallint(3) NOT NULL DEFAULT '0',
  `coverage` int(11) DEFAULT NULL,
  `age_start` smallint(3) DEFAULT NULL,
  `age_end` smallint(3) DEFAULT NULL,
  `plan` varchar(20) DEFAULT NULL,
  `duration_start` smallint(4) DEFAULT NULL,
  `duration_end` smallint(4) DEFAULT NULL,
  `has_usa` tinyint(1) DEFAULT NULL,
  `premium` int(11) DEFAULT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  PRIMARY KEY (`id`)
);