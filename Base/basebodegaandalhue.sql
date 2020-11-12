-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema basebodegaandalhue
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema basebodegaandalhue
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `basebodegaandalhue` DEFAULT CHARACTER SET utf8 ;
USE `basebodegaandalhue` ;

-- -----------------------------------------------------
-- Table `basebodegaandalhue`.`categories`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `basebodegaandalhue`.`categories` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `basebodegaandalhue`.`lines`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `basebodegaandalhue`.`lines` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `basebodegaandalhue`.`varietals`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `basebodegaandalhue`.`varietals` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `basebodegaandalhue`.`qualities`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `basebodegaandalhue`.`qualities` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `basebodegaandalhue`.`displays`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `basebodegaandalhue`.`displays` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `basebodegaandalhue`.`temperatures`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `basebodegaandalhue`.`temperatures` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `value` INT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `basebodegaandalhue`.`products`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `basebodegaandalhue`.`products` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `cat_id` INT NOT NULL,
  `line_id` INT NOT NULL,
  `varietal_id` INT NOT NULL,
  `quality_id` INT NOT NULL,
  `vintage` INT NULL,
  `display_id` INT NOT NULL,
  `price` DECIMAL(8,2) NULL,
  `discount` INT NULL,
  `tasting` TEXT(1000) NULL,
  `pairing` TEXT(1000) NULL,
  `temperature_id` INT NOT NULL,
  `image` VARCHAR(45) NULL,
  `datasheet` LONGTEXT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_cat_id_idx` (`cat_id` ASC) VISIBLE,
  INDEX `fk_line_id_idx` (`line_id` ASC) VISIBLE,
  INDEX `fk_varietal_id_idx` (`varietal_id` ASC) VISIBLE,
  INDEX `fk_quality_id_idx` (`quality_id` ASC) VISIBLE,
  INDEX `fk_display_id_idx` (`display_id` ASC) VISIBLE,
  INDEX `fk_temperatures_id_idx` (`temperature_id` ASC) VISIBLE,
  CONSTRAINT `fk_cat_id`
    FOREIGN KEY (`cat_id`)
    REFERENCES `basebodegaandalhue`.`categories` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_line_id`
    FOREIGN KEY (`line_id`)
    REFERENCES `basebodegaandalhue`.`lines` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_varietal_id`
    FOREIGN KEY (`varietal_id`)
    REFERENCES `basebodegaandalhue`.`varietals` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_quality_id`
    FOREIGN KEY (`quality_id`)
    REFERENCES `basebodegaandalhue`.`qualities` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_display_id`
    FOREIGN KEY (`display_id`)
    REFERENCES `basebodegaandalhue`.`displays` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_temperatures_id`
    FOREIGN KEY (`temperature_id`)
    REFERENCES `basebodegaandalhue`.`temperatures` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `basebodegaandalhue`.`users`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `basebodegaandalhue`.`users` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `first_name` VARCHAR(45) NULL,
  `last_name` VARCHAR(45) NULL,
  `birthdate` DATE NULL,
  `address` VARCHAR(45) NULL,
  `town` VARCHAR(45) NULL,
  `country` VARCHAR(45) NULL,
  `email` VARCHAR(45) NULL,
  `password` VARCHAR(45) NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `basebodegaandalhue`.`carts`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `basebodegaandalhue`.`carts` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `quantity` INT NULL,
  `user_id` INT NOT NULL,
  `creation_date` DATE NULL,
  `date_of_purchase` DATE NULL,
  `state` VARCHAR(45) NULL,
  `total` DECIMAL(8,2) NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_user_id_idx` (`user_id` ASC) VISIBLE,
  CONSTRAINT `fk_user_id`
    FOREIGN KEY (`user_id`)
    REFERENCES `basebodegaandalhue`.`users` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `basebodegaandalhue`.`cart_product`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `basebodegaandalhue`.`cart_product` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `cart_id` INT NOT NULL,
  `product_id` INT NOT NULL,
  `quantity` INT NULL,
  `frozen_price` DECIMAL(8,2) NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_cart_id_idx` (`cart_id` ASC) VISIBLE,
  INDEX `fk_product_id_idx` (`product_id` ASC) VISIBLE,
  CONSTRAINT `fk_cart_id`
    FOREIGN KEY (`cart_id`)
    REFERENCES `basebodegaandalhue`.`carts` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_product_id`
    FOREIGN KEY (`product_id`)
    REFERENCES `basebodegaandalhue`.`products` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
