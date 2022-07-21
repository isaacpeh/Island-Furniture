var mysql = require('mysql');
var dbconnect = {
    getConnection: function () {
        var conn = mysql.createConnection({
            host: "localhost",
            user: "root",
            password: "yourownpassword",
            database: "islandfurniture-it07",
            port:3307
        });
        return conn;
    }
};
module.exports = dbconnect
