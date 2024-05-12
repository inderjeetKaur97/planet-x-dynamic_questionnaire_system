const userResources = require('../resources/users.resources')
const ResponseHandler = require('../helpers/responseHandler');
const userValidator = require('../validation/users.validation')
const createUser = async (req, res, next) => {
  console.log("userController@createUser")
  let { firstName, lastName, email, password, role } = req.body
  let hashPassword = await bcrypt.hash(password, 10)
  try {
    let userCreated = await userResources.createUser(firstName, lastName, email, hashPassword, role)
    if (userCreated)
      return ResponseHandler.success(res, 'User Created Successfully', userCreated);
    return ResponseHandler.internalServerError(res, null, null);
  } catch (error) {
    console.log("userController@createUser", error)
    return ResponseHandler.internalServerError(res, null, null);
  }
}
module.exports = {
  createUser
}
