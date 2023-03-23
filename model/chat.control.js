const chats = require('./chat.mongo')


const newchat = async(id1,id2)=>{
    var arr = [id1,id2]
    arr = arr.sort()
    const data = await chats.find({users:arr})
    if(data.length>0){
        return data[0]
    }
    else{
        const newdata = await chats.create({users:arr})
        return newdata
    }
}


module.exports = {
    newchat,
}