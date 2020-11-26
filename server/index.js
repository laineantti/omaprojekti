var express = require("express")
var cors = require("cors")
var bodyParser = require("body-parser")
 
var app = express()
module.exports = app
var port = process.env.PORT || 5000
app.use(bodyParser.json())
//https://expressjs.com/en/resources/middleware/cors.html
app.use(cors())
app.post('/poistatentti', (req, res) => {
  
  console.log(req.body)
  res.send('Tähän tulee sitten dataa tietokannasta tai jotain muuta')
})
app.post('/', (req, res) => {
  
  console.log(req.body)
  res.send('Tähän tulee sitten dataa tietokannasta tai jotain muuta')
})
app.post('/lisäätentti', (req, res) => {
  
  console.log(req.body)
  res.send('Tähän tulee sitten dataa tietokannasta tai jotain muuta')
})
app.post('/haekaikkitentit', (req, res) => {
  
  console.log(req.body)
  res.send('Tähän tulee sitten dataa tietokannasta tai jotain muuta')
})
app.listen(port, () => {
    console.log("Palvelin käynnistyi portissa: " + port)
})