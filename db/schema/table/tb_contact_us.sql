CREATE TABLE IF NOT EXISTS `contact_us` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `product` varchar(10) DEFAULT NULL,
  `name` varchar(100)  DEFAULT NULL,
  `address` varchar(250)  DEFAULT NULL,
  `message` varchar(1000)  DEFAULT NULL,
  `email` varchar(50)  DEFAULT NULL,
  `mobile` varchar(11)  DEFAULT NULL,
  `created_at` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ;
