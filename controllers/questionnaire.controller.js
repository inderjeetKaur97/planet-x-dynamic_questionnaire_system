const questionnaireResources = require('../resources/questionnaire.resources')
const ResponseHandler = require('../helpers/responseHandler');
const userValidator = require('../validation/users.validation')
const bcrypt = require('bcrypt')
const generateAuthToken = require('../helpers/generateAuthToken')


const createQuestionnaire = async (req, res, next) => {
  console.log("questionnaireController@createQuestionnaire")
  let { title, description } = req.body
  try {
    let created = await questionnaireResources.createQuestionnaire(title, description)
    if (created)
      return ResponseHandler.success(res, created, 'questionnaire Created Successfully.');
    return ResponseHandler.internalServerError(res, null);
  } catch (error) {
    console.log("questionnaireController@createQuestionnaire", error)
    return ResponseHandler.internalServerError(res, null);
  }
}
const createFieldMetaData = async (req, res, next) => {
  console.log("questionnaireController@createFieldMetaData")
  let { type, validation, minOptionsCount } = req.body
  try {
    let created = await questionnaireResources.createFieldMetaData(type, validation, minOptionsCount)
    if (created)
      return ResponseHandler.success(res, created, 'fields meta data added Successfully.');
    return ResponseHandler.internalServerError(res, null);
  } catch (error) {
    console.log("questionnaireController@createFieldMetaData", error)
    return ResponseHandler.internalServerError(res, null);
  }
}
const getFieldMetaData = async (req, res, next) => {
  console.log("questionnaireController@getFieldMetaData")
  let { title, description } = req.body
  try {
    let created = await questionnaireResources.getFieldMetaData(title, description)
    if (created)
      return ResponseHandler.success(res, created, 'questionnaire Created Successfully.');
    return ResponseHandler.internalServerError(res, null);
  } catch (error) {
    console.log("questionnaireController@getFieldMetaData", error)
    return ResponseHandler.internalServerError(res, null);
  }
}
module.exports = {
  createQuestionnaire,
  getFieldMetaData,
  createFieldMetaData
}
