# Реалізація інформаційного та програмного забезпечення

В рамках проекту розробляється:
## SQL-скрипт для створення та початкового наповнення бази даних
```sql
SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `mydb` ;

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `mydb` DEFAULT CHARACTER SET utf8mb3 ;
USE `mydb` ;

-- -----------------------------------------------------
-- Table `mydb`.`user`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mydb`.`user` ;

CREATE TABLE IF NOT EXISTS `mydb`.`user` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `login` TEXT NOT NULL,
  `name` TEXT NOT NULL,
  `password` TEXT NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`source`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mydb`.`source` ;

CREATE TABLE IF NOT EXISTS `mydb`.`source` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `url` VARCHAR(45) NOT NULL,
  `key` INT NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`scraper`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mydb`.`scraper` ;

CREATE TABLE IF NOT EXISTS `mydb`.`scraper` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `type` TEXT NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`task`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mydb`.`task` ;

CREATE TABLE IF NOT EXISTS `mydb`.`task` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` TEXT NOT NULL,
  `description` TEXT NOT NULL,
  `createdAt` DATETIME NOT NULL,
  `updatedAt` DATETIME NOT NULL,
  `state` TEXT NOT NULL,
  `schedule` TEXT NOT NULL,
  `source_id` INT NOT NULL,
  `scraper_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_task_source1_idx` (`source_id` ASC) VISIBLE,
  INDEX `fk_task_scraper1_idx` (`scraper_id` ASC) VISIBLE,
  CONSTRAINT `fk_task_source1`
    FOREIGN KEY (`source_id`)
    REFERENCES `mydb`.`source` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_task_scraper1`
    FOREIGN KEY (`scraper_id`)
    REFERENCES `mydb`.`scraper` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`role`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mydb`.`role` ;

CREATE TABLE IF NOT EXISTS `mydb`.`role` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` TEXT NOT NULL,
  `description` TEXT NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`user`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mydb`.`user` ;

CREATE TABLE IF NOT EXISTS `mydb`.`user` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `login` TEXT NOT NULL,
  `name` TEXT NOT NULL,
  `password` TEXT NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`access`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mydb`.`access` ;

CREATE TABLE IF NOT EXISTS `mydb`.`access` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `task_id` INT NOT NULL,
  `role_id` INT NOT NULL,
  `user_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_access_task1_idx` (`task_id` ASC) VISIBLE,
  INDEX `fk_access_role1_idx` (`role_id` ASC) VISIBLE,
  INDEX `fk_access_user1_idx` (`user_id` ASC) VISIBLE,
  CONSTRAINT `fk_access_task1`
    FOREIGN KEY (`task_id`)
    REFERENCES `mydb`.`task` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_access_role1`
    FOREIGN KEY (`role_id`)
    REFERENCES `mydb`.`role` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_access_user1`
    FOREIGN KEY (`user_id`)
    REFERENCES `mydb`.`user` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`scrapeInstance`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mydb`.`scrapeInstance` ;

CREATE TABLE IF NOT EXISTS `mydb`.`scrapeInstance` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `data` TEXT NOT NULL,
  `flag` VARCHAR(45) NOT NULL,
  `scraper_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_scrapeInstance_scraper1_idx` (`scraper_id` ASC) VISIBLE,
  CONSTRAINT `fk_scrapeInstance_scraper1`
    FOREIGN KEY (`scraper_id`)
    REFERENCES `mydb`.`scraper` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`result`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mydb`.`result` ;

CREATE TABLE IF NOT EXISTS `mydb`.`result` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` TEXT NOT NULL,
  `description` TEXT NOT NULL,
  `createdAt` DATETIME NOT NULL,
  `task_id` INT NOT NULL,
  `scrapeInstance_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_result_task1_idx` (`task_id` ASC) VISIBLE,
  INDEX `fk_result_scrapeInstance1_idx` (`scrapeInstance_id` ASC) VISIBLE,
  CONSTRAINT `fk_result_task1`
    FOREIGN KEY (`task_id`)
    REFERENCES `mydb`.`task` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_result_scrapeInstance1`
    FOREIGN KEY (`scrapeInstance_id`)
    REFERENCES `mydb`.`scrapeInstance` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`message`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mydb`.`message` ;

CREATE TABLE IF NOT EXISTS `mydb`.`message` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `text` TEXT NOT NULL,
  `result_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_message_result1_idx` (`result_id` ASC) VISIBLE,
  CONSTRAINT `fk_message_result1`
    FOREIGN KEY (`result_id`)
    REFERENCES `mydb`.`result` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`metadata`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mydb`.`metadata` ;

CREATE TABLE IF NOT EXISTS `mydb`.`metadata` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `key` INT NOT NULL,
  `value` TEXT NOT NULL,
  `message_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_metadata_message1_idx` (`message_id` ASC) VISIBLE,
  CONSTRAINT `fk_metadata_message1`
    FOREIGN KEY (`message_id`)
    REFERENCES `mydb`.`message` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;

-- -----------------------------------------------------
-- Data for table `mydb`.`source`
-- -----------------------------------------------------
START TRANSACTION;
USE `mydb`;
INSERT INTO `mydb`.`source` (`id`, `url`, `key`) VALUES (DEFAULT, 'https://tsn.ua', 231);
INSERT INTO `mydb`.`source` (`id`, `url`, `key`) VALUES (DEFAULT, 'https://radio.nv.ua', 34);

COMMIT;


-- -----------------------------------------------------
-- Data for table `mydb`.`role`
-- -----------------------------------------------------
START TRANSACTION;
USE `mydb`;
INSERT INTO `mydb`.`role` (`id`, `name`, `description`) VALUES (DEFAULT, 'user', 'User');
INSERT INTO `mydb`.`role` (`id`, `name`, `description`) VALUES (DEFAULT, 'admin', 'Administrator');

COMMIT;


-- -----------------------------------------------------
-- Data for table `mydb`.`user`
-- -----------------------------------------------------
START TRANSACTION;
USE `mydb`;
INSERT INTO `mydb`.`user` (`id`, `login`, `name`, `password`) VALUES (DEFAULT, 'artem12333', 'Artem', 'qwertui');
INSERT INTO `mydb`.`user` (`id`, `login`, `name`, `password`) VALUES (DEFAULT, 'omega', 'Omega', 'onion86');

COMMIT;
```

- RESTfull сервіс для управління даними

## Головний файл, що відповідає за запуск серверу
```js
const express = require('express');
const bodyParser = require('body-parser');

const PORT = process.env.PORT || 8080;

const app = express();
app.use(bodyParser.text());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/messages', require('./message_routes'));
app.use('/metadata', require('./metadata_routes'));

app.listen(PORT, () => console.log(`server started running at port ${PORT}`));
```

## Файл, що створює та експортує connection pool
```js
const mysql = require('mysql2');

const USER = 'root';
const PASSWORD = 'root';
const DB = 'mcas';

module.exports = mysql.createPool({
user: USER,
password: PASSWORD,
database: DB,
namedPlaceholders: true
});
```

## Файл-контролер для CRUD операцій з повідомленнями
```js
const express = require('express');
const router = new express.Router();

const pool = require('./connection_pool');
const createResponse = require('./create_response');

const MESSAGE_SQL = {
    GET_ALL: 'SELECT * FROM message',
    GET: 'SELECT * FROM message WHERE id = :id',
    INSERT: 'INSERT INTO message(text, result_id) VALUES(:text, :resultId)',
    DELETE: 'DELETE FROM message WHERE id = :id',
    UPDATE: 'UPDATE message SET text = :text, result_id = :resultId WHERE id = :id'
};

router.get('/', (req, resp) => {
    pool.execute(MESSAGE_SQL.GET_ALL,
        createResponse('unable to retrieve messages', resp));
}).post('/', (req, resp) => {
    const {text} = req.body;
    const {resultId} = req.body;
    pool.execute(MESSAGE_SQL.INSERT, {text, resultId},
        createResponse('unable to save message', resp));
}).get('/:id', (req, resp) => {
    const {id} = req.params;
    pool.execute(MESSAGE_SQL.GET, {id},
        createResponse(`unable to retrieve message by id ${id}`, resp));
}).delete('/:id', (req, resp) => {
    const {id} = req.params;
    pool.execute(MESSAGE_SQL.DELETE, {id},
        createResponse(`unable to delete message by id ${id}`, resp));
}).put('/:id', (req, resp) => {
    const {id} = req.params;
    const {text} = req.body;
    const {resultId} = req.body;
    pool.execute(MESSAGE_SQL.UPDATE, {id, text, resultId},
        createResponse(`unable to update message by id ${id}`, resp));
});

module.exports = router;
```
## Файл-контроллер для CRUD операцій з метаданими
```js
const express = require('express');
const router = new express.Router();

const pool = require('./connection_pool');

const createResponse = require('./create_response');

const METADATA_SQL = {
GET_ALL: 'SELECT * FROM metadata',
GET: 'SELECT * FROM metadata WHERE id = :id',
INSERT: 'INSERT INTO metadata(`key`, value, message_id) VALUES(:key, :value, :messageId)',
DELETE: 'DELETE FROM metadata WHERE id = :id',
UPDATE: 'UPDATE metadata SET `key` = :key, value = :value, message_id = :messageId WHERE id = :id'
};

router.get('/', (req, resp) => {
pool.execute(METADATA_SQL.GET_ALL,
createResponse('unable to save metadata', resp));
}).post('/', (req, resp) => {
const {key} = req.body;
const {value} = req.body;
const {messageId} = req.body;
pool.execute(METADATA_SQL.INSERT, {key, value, messageId},
createResponse('unable to save metadata', resp));
}).get('/:id', (req, resp) => {
const {id} = req.params;
pool.execute(METADATA_SQL.GET, {id},
createResponse(`unable to retrieve metadata by id ${id}`, resp));
}).delete('/:id', (req, resp) => {
const {id} = req.params;
pool.execute(METADATA_SQL.DELETE, {id},
createResponse(`unable to delete metadata by id ${id}`, resp));
}).put('/:id', (req, resp) => {
const {id} = req.params;
const {key} = req.body;
const {value} = req.body;
const {messageId} = req.body;
pool.execute(METADATA_SQL.UPDATE, {id, key, value, messageId},
createResponse(`unable to update metadata by id ${id}`, resp));
});

module.exports = router;
```

## Файл, що експортує utility метод createResponse
```js
const RESP = {
    SERVER_ERROR: 500,
    SUCCESS: 200
};

module.exports = (errorMsg, resp) => (err, res) => {
    if (err) resp.status(RESP.SERVER_ERROR).send(errorMsg);
    resp.status(RESP.SUCCESS).send(res);
};
```
