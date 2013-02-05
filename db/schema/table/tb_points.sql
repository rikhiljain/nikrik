CREATE TABLE IF NOT EXISTS `points` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) DEFAULT NULL,
  `ref_type` varchar(10) DEFAULT NULL,
  `ref_id` int(11) DEFAULT NULL,
  `value` int(11) DEFAULT NULL,
  `status` varchar(20) DEFAULT NULL,
  `exp_dt` datetime DEFAULT NULL,
  `created_at` datetime NOT NULL,
  PRIMARY KEY (`id`)
);
