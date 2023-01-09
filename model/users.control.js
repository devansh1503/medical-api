const users = require("./users.mongo")

async function getAll(){
    const data = await users.find({})
    return data
}

async function postData(data){
    console.log(data)
    await users.updateOne({
        id:data.id,
        userName:data.userName
    }, data, {
        upsert:true
    })
}

async function getUser(username, pass){
    console.log(username)
    console.log(pass)
    const data = await users.findOne({
        userName:username,
        password:pass
    })
    return data
}

async function deleteUser(id){
    await users.deleteOne({
        id: id
    })
}

module.exports = {
    getAll,
    postData,
    getUser,
    deleteUser,
}