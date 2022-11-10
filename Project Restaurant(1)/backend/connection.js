const mysql = require('mysql')

const db = mysql.createConnection({
    host: "localhost",
    database: "my_restaurant",
    user: "root",
    password: ""
})

module.exports = db;