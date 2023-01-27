const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const userSchema = mongoose.Schema({
  email: String,
  password: String,
  userName: String,
  fullName: String,
  userRole: String,
  userAddress: String,
  userContact: String,
  userGender: String,
  userAge: Number,
  approvalStatus: Boolean
},)


module.exports = mongoose.model('users', userSchema)