const questionnaireSchema = require('../models/questionnaire')
const fieldsMetaDataSchema = require('../models/fieldsMetaData')
const usersQuestionnaireDataSchema = require('../models/usersQuestionnaireData')
const questonnaireLogsSchema = require('../models/questonnaireLogs')
const createQuestionnaire = async (title, description, questions) => {
  console.log("questionnaireResource@createQuestionnaire")
  try {
    let questionnaireData = new questionnaireSchema({ title, description, questions })
    questionnaireData.save()
    if (questionnaireData)
      return questionnaireData
    return false
  } catch (error) {
    console.log("questionnaireResource@createQuestionnaire", error)
    return false
  }
}
const submitQuestionnaire = async (questionnaireId, userId, questionnaireData) => {
  console.log("questionnaireResource@submitQuestionnaire")
  try {
    let questionsString = JSON.stringify(questionnaireData)
    let addLogs
    let submittedQuestionnaire = await usersQuestionnaireDataSchema.findOneAndUpdate({
      questionnaireId, userId
    }, { questionnaireId, userId, questionnaireData: questionsString }, { upsert: true })
    if (submittedQuestionnaire) {
      addLogs = new questonnaireLogsSchema({
        questionnaireId,
        viewedBy: userId,
        isSubmitted: true
      })
      addLogs.save()
    }
    else
      return false
    if (addLogs)
      return submittedQuestionnaire
    return false
  } catch (error) {
    console.log("questionnaireResource@submitQuestionnaire", error)
    return false
  }
}
const getAnalytics = async (questionnaireId, userId = null, isSubmitted = false) => {
  console.log("questionnaireResource@getAnalytics")
  try {
    let fetchQuery = { questionnaireId }
    if (userId)
      fetchQuery = { ...fetchQuery, viewedBy: userId }
    if (isSubmitted)
      fetchQuery = { ...fetchQuery, isSubmitted }
    let fetchAnalytics = await questonnaireLogsSchema.countDocuments(fetchQuery)
    if (fetchAnalytics)
      return fetchAnalytics
    return false
  } catch (error) {
    console.log("questionnaireResource@getAnalytics", error)
    return false
  }
}
const getQuestionnaire = async (questionnaireId) => {
  console.log("questionnaireResource@getQuestionnaire")
  try {
    let fetchQuestionnaire
    if (questionnaireId)
      fetchQuestionnaire = await questionnaireSchema.findById({
        _id:
          questionnaireId
      })
    else
      fetchQuestionnaire = await questionnaireSchema.find()
    if (fetchQuestionnaire)
      return fetchQuestionnaire
    return false
  } catch (error) {
    console.log("questionnaireResource@getQuestionnaire", error)
    return false
  }
}
const createFieldMetaData = async (type, validation, minOptionsCount) => {
  console.log("questionnaireResource@createFieldMetaData")
  try {
    let fieldMetaData = new fieldsMetaDataSchema({ type, validation, minOptionsCount })
    fieldMetaData.save()
    if (fieldMetaData)
      return fieldMetaData
    return false
  } catch (error) {
    console.log("questionnaireResource@createFieldMetaData", error)
    return false
  }
}
const getFieldMetaData = async (type) => {
  console.log("questionnaireResource@getFieldMetaData")
  try {
    let questionnaireData = await fieldsMetaDataSchema.find({ type }, null, { sort: { updatedAt: -1 } })
    if (questionnaireData && questionnaireData.length)
      return questionnaireData[0]
    return false
  } catch (error) {
    console.log("questionnaireResource@getFieldMetaData", error)
    return false
  }
}
module.exports = {
  createQuestionnaire,
  createFieldMetaData,
  getFieldMetaData,
  submitQuestionnaire,
  getQuestionnaire,
  getAnalytics
}
