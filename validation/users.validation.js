const Joi = require('joi');
const ResponseHandler = require('../helpers/responseHandler');

const createUserSchema = (req, res, next) => {
  let reqSchema = req.body
  let joiSchema = Joi.object({
    firstName: Joi.string().required(),
    lastName: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required(),
    role: Joi.string().valid('admin', 'user').required()
  })
  let { errors, value } = joiSchema.validate(reqSchema)
  if (errors)
    return ResponseHandler.badRequest(res, error.details[0].message);
  next()
}
module.exports = {
  createUserSchema
}
