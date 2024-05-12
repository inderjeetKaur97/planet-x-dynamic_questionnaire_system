const questionnaireResources = require('../resources/questionnaire.resources')
const ResponseHandler = require('../helpers/responseHandler');
const userValidator = require('../validation/users.validation')
const bcrypt = require('bcrypt')
const generateAuthToken = require('../helpers/generateAuthToken')


const createQuestionnaire = async (req, res, next) => {
  console.log("questionnaireController@createQuestionnaire")
  let { title, description, questions } = req.body
  try {
    let created = await questionnaireResources.createQuestionnaire(title, description, questions)
    if (created)
      return ResponseHandler.success(res, created, 'questionnaire Created Successfully.');
    return ResponseHandler.internalServerError(res, null);
  } catch (error) {
    console.log("questionnaireController@createQuestionnaire", error)
    return ResponseHandler.internalServerError(res, null);
  }
}
const submitQuestionnaire = async (req, res, next) => {
  console.log("questionnaireController@submitQuestionnaire")
  let { questionnaireId, questionnaireData } = req.body
  let userId = req.user._id
  try {
    let submitted = await questionnaireResources.submitQuestionnaire(questionnaireId, userId, questionnaireData)
    if (submitted)
      return ResponseHandler.success(res, submitted, 'questionnaire submitted Successfully.');
    return ResponseHandler.internalServerError(res, null);
  } catch (error) {
    console.log("questionnaireController@createQuestionnaire", error)
    return ResponseHandler.internalServerError(res, null);
  }
}
const getAnalytics = async (req, res, next) => {
  console.log("questionnaireController@getAnalytics")
  let { questionnaireId, userId, isSubmitted } = req.body
  try {
    let fetchAnalytics = await questionnaireResources.getAnalytics(questionnaireId, userId, isSubmitted)
    if (fetchAnalytics)
      return ResponseHandler.success(res, { count: fetchAnalytics }, 'questionnaire analytics fetched Successfully.');
    return ResponseHandler.internalServerError(res, null);
  } catch (error) {
    console.log("questionnaireController@getAnalytics", error)
    return ResponseHandler.internalServerError(res, null);
  }
}
const getQuestionnaire = async (req, res, next) => {
  console.log("questionnaireController@getQuestionnaire")
  let questionnaireId = req.query.questionnaireId
  try {
    let fetchQuestionnaire = await questionnaireResources.getQuestionnaire(questionnaireId)
    if (fetchQuestionnaire)
      return ResponseHandler.success(res, fetchQuestionnaire, 'questionnaire fetched Successfully.');
    return ResponseHandler.notFound(res, null);
  } catch (error) {
    console.log("questionnaireController@getQuestionnaire", error)
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
  let type = req.query.type
  try {
    let fetchInfo = await questionnaireResources.getFieldMetaData(type)
    if (fetchInfo)
      return ResponseHandler.success(res, fetchInfo, 'Field meta info fetched Successfully.');
    return ResponseHandler.notFound(res, null);
  } catch (error) {
    console.log("questionnaireController@getFieldMetaData", error)
    return ResponseHandler.internalServerError(res, null);
  }
}
module.exports = {
  createQuestionnaire,
  getFieldMetaData,
  createFieldMetaData,
  submitQuestionnaire,
  getQuestionnaire,
  getAnalytics
}
