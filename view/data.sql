INSERT INTO `eco_markers` (`id`, `name`, `address`, `lat`, `lng`, `type`) VALUES ('1', 'Posto de Coleta - Adega Atacadista', '580 Darling Street, Rozelle, NSW', '-15.829302199999997', '-48.9113133', 'Posto de coleta');
INSERT INTO `eco_markers` (`id`, `name`, `address`, `lat`, `lng`, `type`) VALUES ('2', 'Posto de Coleta - Fort Atacadista', '76 Wilford Street, Newtown, NSW', '-15.829302199999997', '-48.8113133', 'Cooperativa');
INSERT INTO `eco_markers` (`id`, `name`, `address`, `lat`, `lng`, `type`) VALUES ('3', 'Posto de Coleta - Extra', 'Greenwood Plaza, 36 Blue St, North Sydney NSW', '-15.829302199999997', '-48.7113133', 'Posto de coleta');
INSERT INTO `eco_markers` (`id`, `name`, `address`, `lat`, `lng`, `type`) VALUES ('4', 'Posto de Coleta - Dia A Dia', '7A, 2 Huntley Street, Alexandria, NSW', '-15.829302199999997', '-48.6113133', 'Posto de coleta');
INSERT INTO `eco_markers` (`id`, `name`, `address`, `lat`, `lng`, `type`) VALUES ('5', 'Posto de Coleta - Espirito Santo', '16 Foster Street, Surry Hills, NSW', '-15.829302199999997', '-48.5113133', 'Posto de coleta');
INSERT INTO `eco_markers` (`id`, `name`, `address`, `lat`, `lng`, `type`) VALUES ('6', 'Posto de Coleta - Adega', '43 Macpherson Street, Bronte, NSW', '-15.829302199999997', '-48.4113133', 'Posto de coleta');
INSERT INTO `eco_markers` (`id`, `name`, `address`, `lat`, `lng`, `type`) VALUES ('7', 'Posto de Coleta - Carrefour', '60-64 Reservoir Street, Surry Hills, NSW', '-15.829302199999997', '-48.3113133', 'Posto de coleta');
INSERT INTO `eco_markers` (`id`, `name`, `address`, `lat`, `lng`, `type`) VALUES ('8', 'Posto de Coleta - Leroy Merlin', '60 Riley Street, Darlinghurst, NSW', '-15.829302199999997', '-48.2113133', 'Cooperativa');


CREATE TABLE `eco_markers` (
`id` INT NOT NULL AUTO_INCREMENT PRIMARY KEY ,
`name` VARCHAR( 60 ) NOT NULL ,
`address` VARCHAR( 80 ) NOT NULL ,
`lat` FLOAT( 10, 6 ) NOT NULL ,
`lng` FLOAT( 10, 6 ) NOT NULL ,
`type` VARCHAR( 30 ) NOT NULL
) ENGINE = MYISAM ;