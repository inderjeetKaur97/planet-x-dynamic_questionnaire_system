const userResources = require('../resources/users.resources')
const ResponseHandler = require('../helpers/responseHandler');
const userValidator = require('../validation/users.validation')
const bcrypt = require('bcrypt')
const generateAuthToken = require('../helpers/generateAuthToken')


const createUser = async (req, res, next) => {
  console.log("userController@createUser")
  let { firstName, lastName, email, password, role } = req.body
  if (req.admin.role === "admin" && (role === "admin" || role === "super_admin"))
    return ResponseHandler.unauthorized(res, null, "Admin cannot create super_admin or other admin");
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
const getUserDetails = async (req, res, next) => {
  console.log("userController@getUserDetails")
  let { userId, role } = req.body
  if (req.admin.role === "admin" && (role === "admin" || role === "super_admin"))
    return ResponseHandler.unauthorized(res, null, "Admin cannot fetch super_admin or other admin details");
  try {
    let userData = await userResources.findUserById(userId)
    if (userData) {
      if (userData.role !== role)
        return ResponseHandler.internalServerError(res, null, "Something went wrong while fetching user details.");
      else
        return ResponseHandler.success(res, userData, 'User details fetched Successfully');
    }
    return ResponseHandler.internalServerError(res, null, "User details not found.");
  } catch (error) {
    console.log("userController@getUserDetails", error)
    return ResponseHandler.internalServerError(res, null);
  }
}
const deactivateUser = async (req, res, next) => {
  console.log("userController@deactivateUser")
  let { userId, role } = req.body
  if (req.admin.role === "admin" && (role === "admin" || role === "super_admin"))
    return ResponseHandler.unauthorized(res, null, "Admin cannot deactivate super_admin or other admins");
  try {
    let userData = await userResources.findUserById(userId)
    if (userData && userData.role !== role) {
      return ResponseHandler.badRequest(res, false, 'Something went wrong while deactivating user');
    }
    let params = { isActive: 0 }
    let userDeactivated = await userResources.updateUserById(userId, params)
    if (userDeactivated)
      return ResponseHandler.success(res, userDeactivated, 'User deactivated Successfully');
    return ResponseHandler.internalServerError(res, null, "something went wrong while fetching user details!");
  } catch (error) {
    console.log("userController@deactivateUser", error)
    return ResponseHandler.internalServerError(res, null);
  }
}
const deleteUser = async (req, res, next) => {
  console.log("userController@deleteUser")
  let { userId, role } = req.body
  if (req.admin.role === "admin" && (role === "admin" || role === "super_admin"))
    return ResponseHandler.unauthorized(res, null, "Admin cannot delete super_admin or other admins");
  try {
    let userData = await userResources.findUserById(userId)
    if (userData && userData.role !== role) {
      return ResponseHandler.badRequest(res, false, 'Something went wrong while deleting user');
    }
    let deletedUser = await userResources.deleteUserById(userId)
    if (deletedUser)
      return ResponseHandler.success(res, deletedUser, 'User deleted Successfully');
    return ResponseHandler.internalServerError(res, null, "something went wrong while deleting user!");
  } catch (error) {
    console.log("userController@deleteUser", error)
    return ResponseHandler.internalServerError(res, null);
  }
}
const updateUser = async (req, res, next) => {
  console.log("userController@updateUser")
  let { userId, role, firstName, lastName, email, password } = req.body
  if (req.admin.role === "admin" && (role === "admin" || role === "super_admin"))
    return ResponseHandler.unauthorized(res, null, "Admin cannot update super_admin or other admins");
  try {
    let userData = await userResources.findUserById(userId)
    if (userData && userData.role !== role) {
      return ResponseHandler.badRequest(res, false, 'Something went wrong while updating user');
    }
    let params = { firstName, lastName, email, password }
    let userAlreadyExist = await userResources.findUserByEmail(email)
    if (userAlreadyExist)
      return ResponseHandler.badRequest(res, false, 'Cannot update email as User Already Exists with this email.');
    let updatedUser = await userResources.updateUserById(userId, params)
    if (updatedUser)
      return ResponseHandler.success(res, updatedUser, 'User updated Successfully');
    return ResponseHandler.internalServerError(res, null, "something went wrong while updating user!");
  } catch (error) {
    console.log("userController@deleteUser", error)
    return ResponseHandler.internalServerError(res, null);
  }
}
const loginUser = async (req, res, next) => {
  console.log("userController@loginUser")
  let { email, password } = req.body
  try {
    let userFound = await userResources.findUserByEmail(email)
    if (!userFound||!userFound.isActive)
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
  loginUser,
  getUserDetails,
  deleteUser,
  updateUser,
  deactivateUser
}
