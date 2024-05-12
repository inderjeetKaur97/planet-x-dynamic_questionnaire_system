require('dotenv').config();
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const router = express.Router()
const connectDb = require('./config/db.config')()
const userRoutes = require("./routes/users.routes")
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/api/v1/users', userRoutes)
app.get('/', (req, res) => {
  res.status(200).send({
    msg: "hello world"
  })
})
module.exports = app
