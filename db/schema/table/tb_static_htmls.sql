CREATE TABLE IF NOT EXISTS `static_htmls` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `query_key` varchar(100) NOT NULL,
  `query_value` mediumtext NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `key` (`query_key`)
)

