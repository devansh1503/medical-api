const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    id: Number,
    password: String,
    userName: String,
    userRole: String,
    userAddress: String,
    userContact: String,
    userGender:String,
    userAge: Number,
    approvalStatus: Boolean
  },)

module.exports = mongoose.model('users',userSchema)