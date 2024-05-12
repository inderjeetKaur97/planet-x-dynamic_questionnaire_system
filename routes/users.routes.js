const express = require('express')
const userController = require('../controllers/users.controller')
const validation = require('../validation/users.validation')
// const auth = require('../middlewares/auth')
const router = express.Router()

router.post('/create-user', validation.createUserSchema, userController.createUser)
// router.post('/login', loginUser)
// router.post('/create', (req, res) => {
//   res.status(200).send({ "msg": "ok" })
// })
module.exports = router
