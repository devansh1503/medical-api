const mongoose = require('mongoose')

const chatSchm = mongoose.Schema({
    users:[{type: mongoose.Schema.Types.ObjectId, ref: "users" }]
})

module.exports = mongoose.model("chats",chatSchm)