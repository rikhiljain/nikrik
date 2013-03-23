CREATE TABLE IF NOT EXISTS `complaints` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `product` varchar(10) NOT NULL,
  `subject` varchar(100)  DEFAULT NULL,
  `message` varchar(2000)  DEFAULT NULL,
  `email` varchar(50)  DEFAULT NULL,
  `mobile` varchar(11)  DEFAULT NULL,
  `name` varchar(30)  DEFAULT NULL,
  `created_at` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ;
