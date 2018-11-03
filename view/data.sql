INSERT INTO 'eco_markers' ('id_marker', 'name_marker', 'address_marker', 'lat_marker', 'lng_marker', 'type_marker') VALUES ('Posto de Coleta - Adega Atacadista', '580 Darling Street, Rozelle, NSW', '-15.829302199999997', '-48.9113133', 'Posto de coleta');
INSERT INTO 'eco_markers' ('id_marker', 'name_marker', 'address_marker', 'lat_marker', 'lng_marker', 'type_marker') VALUES ('2', 'Posto de Coleta - Fort Atacadista', '76 Wilford Street, Newtown, NSW', '-15.829302199999997', '-48.8113133', 'Cooperativa');
INSERT INTO 'eco_markers' ('id_marker', 'name_marker', 'address_marker', 'lat_marker', 'lng_marker', 'type_marker') VALUES ('3', 'Posto de Coleta - Extra', 'Greenwood Plaza, 36 Blue St, North Sydney NSW', '-15.829302199999997', '-48.7113133', 'Posto de coleta');
INSERT INTO 'eco_markers' ('id_marker', 'name_marker', 'address_marker', 'lat_marker', 'lng_marker', 'type_marker') VALUES ('4', 'Posto de Coleta - Dia A Dia', '7A, 2 Huntley Street, Alexandria, NSW', '-15.829302199999997', '-48.6113133', 'Posto de coleta');
INSERT INTO 'eco_markers' ('id_marker', 'name_marker', 'address_marker', 'lat_marker', 'lng_marker', 'type_marker') VALUES ('5', 'Posto de Coleta - Espirito Santo', '16 Foster Street, Surry Hills, NSW', '-15.829302199999997', '-48.5113133', 'Posto de coleta');
INSERT INTO 'eco_markers' ('id_marker', 'name_marker', 'address_marker', 'lat_marker', 'lng_marker', 'type_marker') VALUES ('6', 'Posto de Coleta - Adega', '43 Macpherson Street, Bronte, NSW', '-15.829302199999997', '-48.4113133', 'Posto de coleta');
INSERT INTO 'eco_markers' ('id_marker', 'name_marker', 'address_marker', 'lat_marker', 'lng_marker', 'type_marker') VALUES ('7', 'Posto de Coleta - Carrefour', '60-64 Reservoir Street, Surry Hills, NSW', '-15.829302199999997', '-48.3113133', 'Posto de coleta');
INSERT INTO 'eco_markers' ('id_marker', 'name_marker', 'address_marker', 'lat_marker', 'lng_marker', 'type_marker') VALUES ('8', 'Posto de Coleta - Leroy Merlin', '60 Riley Street, Darlinghurst, NSW', '-15.829302199999997', '-48.2113133', 'Cooperativa');


CREATE TABLE IF NOT EXISTS `ecomoney_api`.`eco_markers` (
`id_marker` INT NOT NULL AUTO_INCREMENT ,
`name_marker` VARCHAR( 60 ) NOT NULL ,
`address_marker` VARCHAR( 80 ) NOT NULL ,
`lat_marker` FLOAT( 10, 6 ) NOT NULL ,
`lng_marker` FLOAT( 10, 6 ) NOT NULL ,
`type_marker` VARCHAR( 30 ) NOT NULL,
PRIMARY KEY (`id_marker`))
ENGINE = InnoDB ;
----SQL Materiais ---

CREATE TABLE IF NOT EXISTS 'ecomoney_api'.'tb_materialtypes' (
  'id_materialtypes' INT NOT NULL,
  'desc_material' VARCHAR(45) NOT NULL,
  'price' DECIMAL(10,2) NOT NULL,
  'point_values' INT NOT NULL,
  PRIMARY KEY ('id_materialtypes'))
ENGINE = InnoDB

--- Insert Materiais -----

INSERT INTO 'ecomoney_api'.'tb_materialtypes' ('id_materialtypes', 'desc_material', 'price', 'point_values') VALUES (1, 'Plastico PET', '2.0', 200);
INSERT INTO 'ecomoney_api'.'tb_materialtypes' ('id_materialtypes', 'desc_material', 'price', 'point_values') VALUES (2, 'Alumínio', '4.0', 400);
INSERT INTO 'ecomoney_api'.'tb_materialtypes' ('id_materialtypes', 'desc_material', 'price', 'point_values') VALUES (3, 'Papelão Misto', '2.0', 100);
INSERT INTO 'ecomoney_api'.'tb_materialtypes' ('id_materialtypes', 'desc_material', 'price', 'point_values') VALUES (4, 'Metal Misto', '1.0', 200);
INSERT INTO 'ecomoney_api'.'tb_materialtypes' ('id_materialtypes', 'desc_material', 'price', 'point_values') VALUES (5, 'Vidro Misto', '1.0', 100);
INSERT INTO 'ecomoney_api'.'tb_materialtypes' ('id_materialtypes', 'desc_material', 'price', 'point_values') VALUES (6, 'Material Organico', '1.0', 100);
INSERT INTO 'ecomoney_api'.'tb_materialtypes' ('id_materialtypes', 'desc_material', 'price', 'point_values') VALUES (7, 'Cobre', '6.0', 600);