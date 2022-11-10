const express = require('express')
const db = require('./connection')
const app = express()
const bodyParser = require('body-parser')

app.use(bodyParser.json())

//setting view engine to ejs
app.set("view engine", "ejs")

// respond with "hello world" when a GET request is made to the homepage
app.get('/list_mahasiswa', (req, res) => {
  if(req.query.id!=undefined){
    db.query(`SELECT * FROM list_mahasiswa where id = ${req.query.id}`, (err, result) => {
      if(err) throw err
      const data = JSON.parse(JSON.stringify(result))
      console.log(data)
      res.send(data)
    })
  }else {
    db.query("SELECT * FROM list_mahasiswa", (err, result) => {
      if(err) throw err
      const data = JSON.parse(JSON.stringify(result))
      console.log(data)
      res.send(data)
    })
  }
})


//route for index page
app.get("/", function (req, res) {
  res.render("index")
})

//route for magic page
app.get("/magic", function (req, res) {
  res.render("magic")
})

app.listen(3000, () => {
    console.log(`Server running at port... 3000`)
})