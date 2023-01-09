const mongoose = require('mongoose')

const appointSchema = mongoose.Schema({
    id: Number,
    patientId: String,
    appointmentData: String,
    healthProblem:String,
    appointmentStatus: Boolean,
    doctorId:String
  })

module.exports = mongoose.model('appointments',appointSchema)