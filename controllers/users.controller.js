const userResources = require('../resources/users.resources')
const ResponseHandler = require('../helpers/responseHandler');
const userValidator = require('../validation/users.validation')
const bcrypt = require('bcrypt')
const generateAuthToken = require('../helpers/generateAuthToken')


const createUser = async (req, res, next) => {
  console.log("userController@createUser")
  let { firstName, lastName, email, password, role } = req.body
  try {
    let userAlreadyExist = await userResources.findUserByEmail(email)
    if (userAlreadyExist) {
      return ResponseHandler.badRequest(res, false, 'User Already Exist with email.');
    }
    let userCreated = await userResources.createUser(firstName, lastName, email, password, role)
    if (userCreated)
      return ResponseHandler.success(res, userCreated, 'User Created Successfully');
    return ResponseHandler.internalServerError(res, null);
  } catch (error) {
    console.log("userController@createUser", error)
    return ResponseHandler.internalServerError(res, null);
  }
}
const loginUser = async (req, res, next) => {
  console.log("userController@loginUser")
  let { email, password } = req.body
  try {
    let userFound = await userResources.findUserByEmail(email)
    if (!userFound)
      return ResponseHandler.unauthorized(res, null);
    const match = bcrypt.compareSync(password, userFound.password);
    if (!match)
      return ResponseHandler.unauthorized(res, null);
    let authToken = await generateAuthToken(userFound)
    delete userFound.password
    userFound.authToken = authToken
    return ResponseHandler.success(res, userFound, 'User Logged in Successfully.');
  } catch (error) {
    console.log("userController@loginUser", error)
    return ResponseHandler.internalServerError(res, null);
  }
}
module.exports = {
  createUser,
  loginUser
}
