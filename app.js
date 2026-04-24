const express = require('express')
const app = express()
const port = 3000
const db = require('./models')
db.sequelize.authenticate().then(() => console.log("hai berhaasil")).catch((err) => console.log(err))

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
