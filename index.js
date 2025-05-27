const express = require('express')
const app = express()

app.get('/buy', (req, res) => {
  res.send('Buy endpoint')
})

app.listen(3001, () => {
  console.log('Server is listening on port 3001')
})
