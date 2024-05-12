const express = require('express')
const questionnaireController = require('../controllers/questionnaire.controller')
const validation = require('../validation/questionnaire.validation')
const auth = require('../middlewares/auth')
const router = express.Router()

router.post('/create-questionnaire', auth.adminAuth, validation.createQuestionnaireSchema, questionnaireController.createQuestionnaire)
router.post('/create-field-meta-data', auth.adminAuth, validation.createFieldMetaDataSchema, questionnaireController.createFieldMetaData)
// router.post('/get-field-data', auth.adminAuth, validation.createQuestionnaireSchema, questionnaireController.createQuestionnaire)


// router.post('/login', validation.loginUserSchema, userController.loginUser)

module.exports = router
