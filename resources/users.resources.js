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
const findUserById = async (userId) => {
  console.log("userResource@findUserById")
  try {
    let userFound = await UserSchema.findOne({ _id:userId })
    if (userFound)
      return { ...userFound._doc }
    return false
  } catch (error) {
    console.log("userResource@findUserById", error)
    return false
  }
}
const deleteUserById = async (userId) => {
  console.log("userResource@deleteUserById")
  try {
    let userDeleted = await UserSchema.deleteOne({ _id:userId })
    if (userDeleted)
      return userDeleted
    return false
  } catch (error) {
    console.log("userResource@deleteUserById", error)
    return false
  }
}
const updateUserById = async (userId,params) => {
  console.log("userResource@updateUserById")
  try {
    let userUpdated=await UserSchema.updateOne({ _id:userId },params)
    if (userUpdated)
      return userUpdated
    return false
  } catch (error) {
    console.log("userResource@updateUserById", error)
    return false
  }
}
module.exports = {
  createUser,
  findUserByEmail,
  findUserById,
  deleteUserById,
  updateUserById
}
