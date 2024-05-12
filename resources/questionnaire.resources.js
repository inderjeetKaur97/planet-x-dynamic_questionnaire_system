const questionnaireSchema = require('../models/questionnaire')
const fieldsMetaDataSchema = require('../models/fieldsMetaData')
const createQuestionnaire = async (title, description) => {
  console.log("questionnaireResource@createQuestionnaire")
  try {
    let questionnaireData = await questionnaireSchema.findOneAndUpdate({ title }, { title, description })
    if (questionnaireData)
      return questionnaireData
    return false
  } catch (error) {
    console.log("questionnaireResource@createQuestionnaire", error)
    return false
  }
}
const getFieldMetaData = async (title, description) => {
  console.log("questionnaireResource@getFieldMetaData")
  try {
    let questionnaireData = await questionnaireSchema.findOneAndUpdate({ title }, { title, description })
    if (questionnaireData)
      return questionnaireData
    return false
  } catch (error) {
    console.log("questionnaireResource@getFieldMetaData", error)
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
module.exports = {
  createQuestionnaire,
  createFieldMetaData,
  getFieldMetaData
}
