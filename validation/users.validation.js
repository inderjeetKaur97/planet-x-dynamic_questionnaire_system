const Joi = require('joi');
const ResponseHandler = require('../helpers/responseHandler');
const userResources = require("../resources/users.resources")
const bcrypt = require('bcrypt')

const createUserSchema = (req, res, next) => {
  console.log("uservalidation@createUserSchema")
  let reqSchema = req.body
  let joiSchema = Joi.object({
    firstName: Joi.string().required(),
    lastName: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required(),
    role: Joi.string().valid('user','admin').required()
  })
  let { error } = joiSchema.validate(reqSchema)
  if (error)
    return ResponseHandler.badRequest(res, error.details[0].message);
  else {
    const salt = bcrypt.genSaltSync(10);
    const hashPassword = bcrypt.hashSync(req.body.password, salt);
    reqSchema.password = hashPassword
    return next()
  }
}
const updateUserSchema = (req, res, next) => {
  console.log("uservalidation@updateUserSchema")
  let reqSchema = req.body
  let joiSchema = Joi.object({
    userId: Joi.string().required(),
    firstName: Joi.string(),
    lastName: Joi.string(),
    email: Joi.string().email(),
    password: Joi.string().min(6),
    role: Joi.string().valid('user','admin').required()
  })
  let { error } = joiSchema.validate(reqSchema)
  if (error)
    return ResponseHandler.badRequest(res, error.details[0].message);
  else {
    if(req.body.password){
    const salt = bcrypt.genSaltSync(10);
    const hashPassword = bcrypt.hashSync(req.body.password, salt);
    reqSchema.password = hashPassword
    }
    return next()
  }
}
const loginUserSchema = async (req, res, next) => {
  console.log("uservalidation@loginUserSchema")
  let reqSchema = req.body
  let joiSchema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().required(),
  })
  let { error } = joiSchema.validate(reqSchema)
  if (error)
    return ResponseHandler.badRequest(res, error.details[0].message);
  return next()
}
const deleteUserSchema = async (req, res, next) => {
  console.log("uservalidation@deleteUserSchema")
  let reqSchema = req.body
  let joiSchema = Joi.object({
    userId: Joi.string().required(),
    role: Joi.string().required(),
  })
  let { error } = joiSchema.validate(reqSchema)
  if (error)
    return ResponseHandler.badRequest(res, error.details[0].message);
  return next()
}
module.exports = {
  createUserSchema,
  loginUserSchema,
  updateUserSchema,
  deleteUserSchema
}
