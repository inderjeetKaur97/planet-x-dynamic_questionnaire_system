require('dotenv').config();
const express = require('express')
const app = express()
const router = express.Router()
const connectDb = require('./config/db.config')()
// const userRoutes = require("./routes/users.routes")
app.use(express.json())
// app.use('/api/v1/users', userRoutes)
app.get('/', (req, res) => {
  res.status(200).send({
    msg: "hello world"
  })
})
module.exports = app
