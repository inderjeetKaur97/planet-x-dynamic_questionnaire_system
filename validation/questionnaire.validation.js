const Joi = require('joi');
const ResponseHandler = require('../helpers/responseHandler');
const userResources = require("../resources/users.resources")
const bcrypt = require('bcrypt')

const createQuestionnaireSchema = (req, res, next) => {
  console.log("questionnaireValidation@createQuestionnaireSchema")
  let reqSchema = req.body
  let joiSchema = Joi.object({
    title: Joi.string().required(),
    description: Joi.string().required()
  })
  let { error } = joiSchema.validate(reqSchema)
  if (error)
    return ResponseHandler.badRequest(res, error.details[0].message);
  else {
    return next()
  }
}
const createFieldMetaDataSchema = (req, res, next) => {
  console.log("questionnaireValidation@createFieldMetaDataSchema")
  let reqSchema = req.body
  let joiSchema = Joi.object({
    type: Joi.string().valid('string', 'number', 'mcq', 'description', 'answerType').required(),
    validation: Joi.array().items(Joi.object({
      label: Joi.string().required(),
      key: Joi.string().required(),
      dataType: Joi.string(),
      buttonType: Joi.string()
    })).required(),
    minOptionsCount: Joi.number().min(2)
  })
  let { error } = joiSchema.validate(reqSchema)
  if (error)
    return ResponseHandler.badRequest(res, error.details[0].message);
  else {
    return next()
  }
}

module.exports = {
  createQuestionnaireSchema,
  createFieldMetaDataSchema
}
