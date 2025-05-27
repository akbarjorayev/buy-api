const express = require('express')
const cors = require('cors')
const app = express()

app.use(
  cors({
    origin: ['http://147.182.192.140'],
  })
)

app.get('/buy', (req, res) => {
  res.send('Buy endpoint')
})

app.listen(3001, () => {
  console.log('Server is listening on port 3001')
})
