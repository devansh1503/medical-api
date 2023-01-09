const appointments = require("./appoint.mongo")

async function getAll(){
    const data = await appointments.find({})
    return data
}

async function postData(data){
    await appointments.updateOne({
        id:data.id,
    }, data, {
        upsert:true
    })
}

async function getUser(id){
    const data = await appointments.find({
        doctorId:id
    })
    return data
}

module.exports = {
    getAll,
    postData,
    getUser,
}