CREATE TABLE IF NOT EXISTS `health_searches` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `no_of_childs` smallint(2) NOT NULL,
  `adult_age` smallint(3) NOT NULL,
  `heath_cover` int(11) NOT NULL,
  `policy_for` smallint(6) NOT NULL,
  `created_at` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ;