var jwt = require('jsonwebtoken');
let config = require('../config/env.config')
let ResponseHandler = require('../helpers/responseHandler')
let userResources = require('../resources/users.resources')

const adminAuth = async (req, res, next) => {
  console.log("middlewares@adminAuth")
  try {
    let token = req.headers['auth-token']
    let decoded = await jwt.verify(token, config.TOKEN_SECRET_KEY)
    if (!decoded)
      return ResponseHandler.unauthorized(res, null, "You do not have correct rights to perfrom this action!");
    let userFound = await userResources.findUserByEmail(decoded.email)
    if (!userFound)
      return ResponseHandler.unauthorized(res, null);
    if (userFound.role !== "admin")
      return ResponseHandler.unauthorized(res, null);
    return next()
  } catch (error) {
    console.log("middlewares@adminAuth", error)
    return ResponseHandler.unauthorized(res, null);
  }
}
const userAuth = async (req, res, next) => {
  console.log("middlewares@userAuth")
  try {
    let token = req.headers['auth-token']
    let decoded = await jwt.verify(token, config.TOKEN_SECRET_KEY)
    if (!decoded)
      return ResponseHandler.unauthorized(res, null, "You do not have correct rights to perfrom this action!");
    let userFound = await userResources.findUserByEmail(decoded.email)
    if (!userFound)
      return ResponseHandler.unauthorized(res, null);
    if (userFound.role !== "user")
      return ResponseHandler.unauthorized(res, null);
    req.user = decoded
    return next()
  } catch (error) {
    console.log("middlewares@userAuth", error)
    return ResponseHandler.unauthorized(res, null);
  }
}

module.exports = {
  adminAuth,
  userAuth
}
