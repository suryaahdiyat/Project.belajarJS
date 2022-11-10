const express = require('express')
const bodyParser = require('body-parser')
const response = require('./response')
const db = require('./connection')
const app = express()
const port = 3000

app.use(bodyParser.json())
db.connect((err) => {
    if(err) throw err
    console.log("Connecting Database success...")
})

app.get("/list_menu", (req, res) => {    
    db.query("SELECT * FROM list_menu", (error, result) => {
        if(error) throw error
        console.log(result)
        response(200, result, "Get All Data From Menu", res)
    })
} )

app.post("/list_menu", (req, res) => {  
    console.log(req.body.product_name)
    const sql = `INSERT INTO list_menu ('id', 'product_name', 'description', 'stock', 'price') VALUES(null, '${req.body.product_name}', '${req.body.description}', ${req.body.stock}, ${req.body.price})`
    console.log(sql)

    // console.log(`testing ${req.body.product_name}, ${req.body.description}, ${req.body.stock}, ${req.body.price}`)
    db.query(`INSERT INTO list_menu ('product_name', 'description', 'stock', 'price') VALUES('${req.body.product_name}', '${req.body.description}', ${req.body.stock}, ${req.body.price})`)
    
    // const testSql = "INSERT INTO list_menu ('product_name', description', 'st'"
    res.send("data loaded")
} )

app.listen(port, () => {
    console.log(`Server running at port... ${port}`)
})