const mongoose = require('mongoose')
const config = require('./env.config')
const connectDb = async () => {
  try {
    let connected = await mongoose.connect(`mongodb://${config.DB_HOST}:${config.DB_PORT}/${config.DB_COLLECTION}`)
    if (connected)
      console.log("Connection to MongoDB successfull.")
    else
      console.log("Connection to MongoDB Failed.")
  } catch (error) {
    console.log(error)
  }
}
module.exports = connectDb
