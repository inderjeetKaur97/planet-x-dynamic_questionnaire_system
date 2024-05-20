const express = require('express')
const userController = require('../controllers/users.controller')
const validation = require('../validation/users.validation')
const auth = require('../middlewares/auth')
const router = express.Router()

router.post('/create-user', auth.adminAuth, validation.createUserSchema, userController.createUser)
router.post('/login', validation.loginUserSchema, userController.loginUser)

// -----new routes------
router.post('/get-user-details', auth.adminAuth,validation.deleteUserSchema, userController.getUserDetails)
router.delete('/delete-user', auth.adminAuth,validation.deleteUserSchema, userController.deleteUser)
router.put('/update-user', auth.adminAuth,validation.updateUserSchema, userController.updateUser)
router.post('/deactivate-user', auth.adminAuth, validation.deleteUserSchema,userController.deactivateUser)

module.exports = router
