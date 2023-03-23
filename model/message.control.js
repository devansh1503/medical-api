const messages = require('./message.mongo')

const getAllmsg = async(id) =>{
    const data = await messages.find({chatId:id})
    return data
}

const postmsg = async(newmsg) =>{
    const data = messages.create(newmsg)
    return data
}

module.exports = {
    getAllmsg,
    postmsg
}