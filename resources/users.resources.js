const UserSchema = require('../models/users')
const createUser = async (firstName, lastName, email, password, role) => {
  console.log("userResource@createUser")
  try {
    let userData = new UserSchema({
      firstName, lastName, email, password, role
    })
    userData.save()
    if (userData)
      return true
    return false
  } catch (error) {
    console.log("userResource@createUser", error)
    return false
  }
}
const findUserByEmail = async (email) => {
  console.log("userResource@findUserByEmail")
  try {
    let userFound = await UserSchema.findOne({ email })
    if (userFound)
      return { ...userFound._doc }
    return false
  } catch (error) {
    console.log("userResource@findUserByEmail", error)
    return false
  }
}
module.exports = {
  createUser,
  findUserByEmail
}
