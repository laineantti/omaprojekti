const express = require('express')
const app = express()
const port = 4000

// notice here I'm requiring my database adapter file
// and not requiring node-postgres directly
const db = require('./db')
app.get('/:id', (req, res, next) => {
  db.query('SELECT * FROM Tentti WHERE id = $1', [req.params.id], (err, result) => {
    if (err) {
      return next(err)
    }
    result.send(result.rows[0])
  })
})
// ... many other routes in this file

/* app.get('/', (req, res) => {
  res.send('Hello World GET!')
}) */

app.post('/', (req, res) => {
  res.send('Hello World POST!')
})

app.delete('/', (req, res) => {
  res.send('Hello World DELETE!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})