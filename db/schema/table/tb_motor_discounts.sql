CREATE TABLE IF NOT EXISTS `motor_discounts` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `idv_chart_id` int(11) DEFAULT NULL,
  `company_id` smallint(6) DEFAULT NULL,
  `rto_id` int(11) DEFAULT NULL,
  `amount` float DEFAULT NULL,
  `year` smallint(4) DEFAULT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ;
