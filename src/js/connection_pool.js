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
