CREATE TABLE IF NOT EXISTS `referrals` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) DEFAULT NULL,
  `email` varchar(50) DEFAULT NULL,
  `mobile` varchar(10) DEFAULT NULL,
  `ref_name` varchar(30) DEFAULT NULL,
  `ref_mobile` varchar(10) DEFAULT NULL,
  `ref_desc` varchar(1000) DEFAULT NULL,
  `amount` int(11) DEFAULT NULL,
  `status` varchar(20) NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  PRIMARY KEY (`id`)
)  ;
