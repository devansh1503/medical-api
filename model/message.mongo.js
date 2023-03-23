const mongoose = require("mongoose")

const msgSchm = mongoose.Schema({
    sender:{type:mongoose.Schema.Types.ObjectId},
    reciever:{type:mongoose.Schema.Types.ObjectId},
    chatId:{type:mongoose.Schema.Types.ObjectId},
    content:{type:String}
})

module.exports = mongoose.model('messages',msgSchm)