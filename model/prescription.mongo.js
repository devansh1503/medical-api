const mongoose = require('mongoose')

const presSchema = mongoose.Schema({
    id: Number,
    patientId: String,
    prescriptionData:String,
    mediceneName: String,
    mediceneDosage: Number,
    days: Number,
    remarks:String
  },)

module.exports = mongoose.model('prescriptions',presSchema)