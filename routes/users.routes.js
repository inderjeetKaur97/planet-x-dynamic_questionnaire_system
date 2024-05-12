const express = require('express')
const userController = require('../controllers/users.controller')
const validation = require('../validation/users.validation')
const auth = require('../middlewares/auth')
const router = express.Router()

router.post('/create-user', auth.adminAuth, validation.createUserSchema, userController.createUser)
router.post('/login', validation.loginUserSchema, userController.loginUser)

module.exports = router
