CREATE TABLE IF NOT EXISTS `policy_attributes` (
  `company_id` int(11) NOT NULL,
  `policy_type_id` int(11) NOT NULL,
  `attrib_name` varchar(50) NOT NULL,
  `attrib_value` varchar(4000) NOT NULL
);
