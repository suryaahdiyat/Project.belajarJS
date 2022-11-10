const mysql = require('mysql')

const db = mysql.createConnection({
    host: "localhost",
    database: "belajar_api",
    user: "root",
    password: ""
})

db.connect((err) => {
    if (err) throw err
    console.log("Connected...")

    const name = "Aku"
    const kelas = "12_A"
    const person = ['John', '18-W']


    var sql = "INSERT INTO 'list_mahasiswa' ('name', 'class') VALUES (?)s"
    console.log(sql)
    db.query(sql, [person], (error, result) => {
        if (error) throw error
        console.log(result.effectedRow + " record inserted..")
    })
})