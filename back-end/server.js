const express = require('express')
const app = express();

app.get('/', (req, res) => {
  res.send('Hello World!')
})


const PORT = process.env.PORT || 3000;

server = app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`)
})

module.exports = {app, server}