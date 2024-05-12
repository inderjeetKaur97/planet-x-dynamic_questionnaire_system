const express = require('express')
const questionnaireController = require('../controllers/questionnaire.controller')
const validation = require('../validation/questionnaire.validation')
const auth = require('../middlewares/auth')
const router = express.Router()

router.post('/create-questionnaire', auth.adminAuth, validation.createQuestionnaireSchema, questionnaireController.createQuestionnaire)
router.post('/create-field-meta-data', auth.adminAuth, validation.createFieldMetaDataSchema, questionnaireController.createFieldMetaData)
router.get('/get-field-meta-data', auth.adminAuth, questionnaireController.getFieldMetaData)
router.get('/get-questionnaire', auth.userAuth, questionnaireController.getQuestionnaire)
router.post('/submit-questionnaire', auth.userAuth, validation.submitQuestionnaireSchema, questionnaireController.submitQuestionnaire)
router.post('/get-analytics', auth.adminAuth, validation.getAnalytics, questionnaireController.getAnalytics)

module.exports = router
