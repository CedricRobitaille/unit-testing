const express = require('express')
const app = express();

app.use(express.json())

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post("/todos", (req, res) => {
  const { todo } = req.body;
  res.json({todo})
});

app.put("/todos/:id", (req, res) => {
  const { id } = req.params;
  const { todo } = req.body;
  res.json({ id, todo })
});

app.delete('/todos/:id', (req, res) => {
  const { id } = req.params;
  res.json({ id })
})


const PORT = process.env.PORT || 3000;

server = app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`)
})

module.exports = {app, server}