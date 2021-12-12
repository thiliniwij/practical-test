CREATE TABLE `infosystem`.`users` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `userName` TEXT(100) NOT NULL,
  `password` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`));


CREATE TABLE `infosystem`.`userinfo` (
  `name` VARCHAR(100) NOT NULL,
  `email` VARCHAR(100) NOT NULL,
  `phoneNo` INT NOT NULL,
  `hobbies` VARCHAR(100) NOT NULL,
  PRIMARY KEY (`name`, `email`));
