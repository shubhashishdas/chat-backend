var mysql = require('mysql2');
var pool = mysql.createPool({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '123456',
    database: 'chat',
});

module.exports = pool.promise();