const prescriptions = require("./prescription.mongo")

async function getAll(){
    const data = await prescriptions.find({})
    return data
}
async function postData(data){
    await prescriptions.updateOne({
        id:data.id,
    }, data, {
        upsert:true
    })
}
async function userPres(username){
    const data = await prescriptions.find({
        patientId:username
    })
    return data
}
module.exports = {
    getAll,
    postData,
    userPres,
}