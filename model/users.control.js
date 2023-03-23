const users = require("./users.mongo")
const bcrypt = require('bcrypt')

async function getAll() {
    const data = await users.find({})
    return data
}

async function postData(data) {
    const user = await users.updateOne({
        email:data.email,
        userName:data.userName
    },data,{
        upsert:true
    })
    console.log(user)
    return data
}

async function getUser(username, pass) {
    console.log(username)
    console.log(pass)
    const data = await users.findOne({
        userName: username,
    })
    const match = await bcrypt.compare(pass, data.password)
    console.log(match," ", pass)
    if(match){
        return data
    }
}
async function getDoc(){
    const data = await users.find({userRole:'Doctor'})
    return data
}
async function getPatients(){
    const data = await users.find({userRole:'Patient'})
    return data
}

async function deleteUser(id) {
    await users.deleteOne({
        id: id
    })
}
async function getOneUser(username){
    const data = await users.findOne({userName:username})
    return data
}

module.exports = {
    getAll,
    postData,
    getUser,
    getDoc,
    deleteUser,
    getOneUser,
    getPatients,
}