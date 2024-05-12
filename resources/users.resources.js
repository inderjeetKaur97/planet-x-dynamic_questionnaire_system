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
module.exports = {
  createUser
}
