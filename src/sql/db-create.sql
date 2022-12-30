SET @OLD_UNIQUE_CHECKS = @@UNIQUE_CHECKS, UNIQUE_CHECKS = 0;
SET @OLD_FOREIGN_KEY_CHECKS = @@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS = 0;
SET @OLD_SQL_MODE = @@SQL_MODE, SQL_MODE =
        'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mcas
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `mcas`;

-- -----------------------------------------------------
-- Schema mcas
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `mcas` DEFAULT CHARACTER SET utf8mb3;
USE `mcas`;

-- -----------------------------------------------------
-- Table `mcas`.`user`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mcas`.`user`;

CREATE TABLE IF NOT EXISTS `mcas`.`user`
(
    `id`       INT  NOT NULL AUTO_INCREMENT,
    `login`    TEXT NOT NULL,
    `name`     TEXT NOT NULL,
    `password` TEXT NOT NULL,
    PRIMARY KEY (`id`)
)
    ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mcas`.`source`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mcas`.`source`;

CREATE TABLE IF NOT EXISTS `mcas`.`source`
(
    `id`  INT         NOT NULL AUTO_INCREMENT,
    `url` VARCHAR(45) NOT NULL,
    `key` INT         NOT NULL,
    PRIMARY KEY (`id`)
)
    ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mcas`.`scraper`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mcas`.`scraper`;

CREATE TABLE IF NOT EXISTS `mcas`.`scraper`
(
    `id`   INT  NOT NULL AUTO_INCREMENT,
    `type` TEXT NOT NULL,
    PRIMARY KEY (`id`)
)
    ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mcas`.`task`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mcas`.`task`;

CREATE TABLE IF NOT EXISTS `mcas`.`task`
(
    `id`          INT      NOT NULL AUTO_INCREMENT,
    `name`        TEXT     NOT NULL,
    `description` TEXT     NOT NULL,
    `createdAt`   DATETIME NOT NULL,
    `updatedAt`   DATETIME NOT NULL,
    `state`       TEXT     NOT NULL,
    `schedule`    TEXT     NOT NULL,
    `source_id`   INT      NOT NULL,
    `scraper_id`  INT      NOT NULL,
    PRIMARY KEY (`id`),
    INDEX `fk_task_source1_idx` (`source_id` ASC) VISIBLE,
    INDEX `fk_task_scraper1_idx` (`scraper_id` ASC) VISIBLE,
    CONSTRAINT `fk_task_source1`
        FOREIGN KEY (`source_id`)
            REFERENCES `mcas`.`source` (`id`)
            ON DELETE NO ACTION
            ON UPDATE NO ACTION,
    CONSTRAINT `fk_task_scraper1`
        FOREIGN KEY (`scraper_id`)
            REFERENCES `mcas`.`scraper` (`id`)
            ON DELETE NO ACTION
            ON UPDATE NO ACTION
)
    ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mcas`.`role`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mcas`.`role`;

CREATE TABLE IF NOT EXISTS `mcas`.`role`
(
    `id`          INT  NOT NULL AUTO_INCREMENT,
    `name`        TEXT NOT NULL,
    `description` TEXT NOT NULL,
    PRIMARY KEY (`id`)
)
    ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mcas`.`access`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mcas`.`access`;

CREATE TABLE IF NOT EXISTS `mcas`.`access`
(
    `id`      INT NOT NULL AUTO_INCREMENT,
    `task_id` INT NOT NULL,
    `role_id` INT NOT NULL,
    `user_id` INT NOT NULL,
    PRIMARY KEY (`id`),
    INDEX `fk_access_task1_idx` (`task_id` ASC) VISIBLE,
    INDEX `fk_access_role1_idx` (`role_id` ASC) VISIBLE,
    INDEX `fk_access_user1_idx` (`user_id` ASC) VISIBLE,
    CONSTRAINT `fk_access_task1`
        FOREIGN KEY (`task_id`)
            REFERENCES `mcas`.`task` (`id`)
            ON DELETE NO ACTION
            ON UPDATE NO ACTION,
    CONSTRAINT `fk_access_role1`
        FOREIGN KEY (`role_id`)
            REFERENCES `mcas`.`role` (`id`)
            ON DELETE NO ACTION
            ON UPDATE NO ACTION,
    CONSTRAINT `fk_access_user1`
        FOREIGN KEY (`user_id`)
            REFERENCES `mcas`.`user` (`id`)
            ON DELETE NO ACTION
            ON UPDATE NO ACTION
)
    ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mcas`.`scrapeInstance`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mcas`.`scrapeInstance`;

CREATE TABLE IF NOT EXISTS `mcas`.`scrapeInstance`
(
    `id`         INT         NOT NULL AUTO_INCREMENT,
    `data`       TEXT        NOT NULL,
    `flag`       VARCHAR(45) NOT NULL,
    `scraper_id` INT         NOT NULL,
    PRIMARY KEY (`id`),
    INDEX `fk_scrapeInstance_scraper1_idx` (`scraper_id` ASC) VISIBLE,
    CONSTRAINT `fk_scrapeInstance_scraper1`
        FOREIGN KEY (`scraper_id`)
            REFERENCES `mcas`.`scraper` (`id`)
            ON DELETE NO ACTION
            ON UPDATE NO ACTION
)
    ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mcas`.`result`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mcas`.`result`;

CREATE TABLE IF NOT EXISTS `mcas`.`result`
(
    `id`                INT      NOT NULL AUTO_INCREMENT,
    `name`              TEXT     NOT NULL,
    `description`       TEXT     NOT NULL,
    `createdAt`         DATETIME NOT NULL,
    `task_id`           INT      NOT NULL,
    `scrapeInstance_id` INT      NOT NULL,
    PRIMARY KEY (`id`),
    INDEX `fk_result_task1_idx` (`task_id` ASC) VISIBLE,
    INDEX `fk_result_scrapeInstance1_idx` (`scrapeInstance_id` ASC) VISIBLE,
    CONSTRAINT `fk_result_task1`
        FOREIGN KEY (`task_id`)
            REFERENCES `mcas`.`task` (`id`)
            ON DELETE NO ACTION
            ON UPDATE NO ACTION,
    CONSTRAINT `fk_result_scrapeInstance1`
        FOREIGN KEY (`scrapeInstance_id`)
            REFERENCES `mcas`.`scrapeInstance` (`id`)
            ON DELETE NO ACTION
            ON UPDATE NO ACTION
)
    ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mcas`.`message`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mcas`.`message`;

CREATE TABLE IF NOT EXISTS `mcas`.`message`
(
    `id`        INT  NOT NULL AUTO_INCREMENT,
    `text`      TEXT NOT NULL,
    `result_id` INT  NOT NULL,
    PRIMARY KEY (`id`),
    INDEX `fk_message_result1_idx` (`result_id` ASC) VISIBLE,
    CONSTRAINT `fk_message_result1`
        FOREIGN KEY (`result_id`)
            REFERENCES `mcas`.`result` (`id`)
            ON DELETE NO ACTION
            ON UPDATE NO ACTION
)
    ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mcas`.`metadata`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mcas`.`metadata`;

CREATE TABLE IF NOT EXISTS `mcas`.`metadata`
(
    `id`         INT  NOT NULL AUTO_INCREMENT,
    `key`        INT  NOT NULL,
    `value`      TEXT NOT NULL,
    `message_id` INT  NOT NULL,
    PRIMARY KEY (`id`),
    INDEX `fk_metadata_message1_idx` (`message_id` ASC) VISIBLE,
    CONSTRAINT `fk_metadata_message1`
        FOREIGN KEY (`message_id`)
            REFERENCES `mcas`.`message` (`id`)
            ON DELETE NO ACTION
            ON UPDATE NO ACTION
)
    ENGINE = InnoDB;


SET SQL_MODE = @OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS = @OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS = @OLD_UNIQUE_CHECKS;

-- -----------------------------------------------------
-- Data for table `mcas`.`source`
-- -----------------------------------------------------
START TRANSACTION;
USE `mcas`;
INSERT INTO `mcas`.`source` (`id`, `url`, `key`)
VALUES (DEFAULT, 'https://tsn.ua', 231);
INSERT INTO `mcas`.`source` (`id`, `url`, `key`)
VALUES (DEFAULT, 'https://radio.nv.ua', 34);

COMMIT;


-- -----------------------------------------------------
-- Data for table `mcas`.`role`
-- -----------------------------------------------------
START TRANSACTION;
USE `mcas`;
INSERT INTO `mcas`.`role` (`name`, `description`)
VALUES ('user', 'User');
INSERT INTO `mcas`.`role` (`name`, `description`)
VALUES ('admin', 'Administrator');

COMMIT;


-- -----------------------------------------------------
-- Data for table `mcas`.`user`
-- -----------------------------------------------------
START TRANSACTION;
USE `mcas`;
INSERT INTO `mcas`.`user` (`login`, `name`, `password`)
VALUES ('kirilllll', 'kirill', 'qwertyui');
INSERT INTO `mcas`.`user` (`login`, `name`, `password`)
VALUES ('user1_login', 'user1_name', 'secret_password');
INSERT INTO scraper(type)
VALUES ('web');
INSERT INTO scrapeInstance(data, flag, scraper_id)
VALUES ('web scraper data', 'scraper flag', 1);
INSERT INTO task(name, description, createdAt, updatedAt, state, schedule, source_id, scraper_id)
VALUES ('task 1 name', 'task 1 description', CURRENT_DATE(), CURRENT_DATE(), 'new', 'task 1 schedule', 1, 1);
INSERT INTO result(name, description, createdAt, task_id, scrapeInstance_id)
VALUES ('result 1 name', 'result 1 description', CURRENT_DATE(), 1, 1);
INSERT INTO message(text, result_id)
VALUES ('message 1 text', 1);
INSERT INTO metadata(`key`, value, message_id)
VALUES (1, 'metavalue', 1);
COMMIT;