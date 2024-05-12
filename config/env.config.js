require('dotenv').config()
const config = {
  APPLICATION_PORT: process.env.APPLICATION_PORT,
  TOKEN_SECRET_KEY: process.env.TOKEN_SECRET_KEY,
  TOKEN_EXPIRES_IN: process.env.TOKEN_EXPIRES_IN,
  DB_HOST: process.env.DB_HOST,
  DB_COLLECTION: process.env.DB_COLLECTION,
  DB_PORT: process.env.DB_PORT,
}
module.exports = config
