var jwt = require('jsonwebtoken');
var config = require('../config/env.config');

const generateAuthToken = (userData) => {
  console.log("helpers@generateAuthToken")
  token = jwt.sign(userData, config.TOKEN_SECRET_KEY, { expiresIn: `${config.TOKEN_EXPIRES_IN}h` })
  return token
}
module.exports = generateAuthToken
