const express = require('express')
const { getAll, postData, userPres } = require('../model/prescription.control')

const presRoute = express.Router()

presRoute.get('/pres', async(req, res)=>{
    const data = await getAll()
    res.json(data)
})

presRoute.post('/pres', async(req, res)=>{
    const data = req.body
    await postData(data)
})

presRoute.get('/pres/:username', async(req, res)=>{
    const username = req.params.username
    const data = await userPres(username)
    console.log(data)
    res.json(data)
})
module.exports = {
    presRoute,
}