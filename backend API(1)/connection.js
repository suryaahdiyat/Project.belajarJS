const mysql = require('mysql')

const db = mysql.createConnection({
    host: "localhost",
    database: "belajar_api",
    user: "root",
    password: ""
})

module.exports = db;