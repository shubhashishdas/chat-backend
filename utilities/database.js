var mysql = require('mysql2');
var config = require('./config');

var pool = mysql.createPool({
    host: config.host,
    port: config.port,
    user: config.user,
    password: config.password,
    database: config.database,
});

module.exports = pool.promise();