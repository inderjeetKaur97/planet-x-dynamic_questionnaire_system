var jwt = require('jsonwebtoken');

const generateAuthToken = (userData) => {
  token = jwt.sign(data, config.TOKEN_SECRET_KEY, { expiresIn: `${config.TOKEN_EXPIRES_IN}h` })
  const currentDate = moment();
  return token
}
module.exports = generateAuthToken
