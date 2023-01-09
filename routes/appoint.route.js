const express = require('express')
const { getAll, postData, getUser } = require('../model/appoint.control')

const appointRoute = express.Router()

appointRoute.get('/appoint', async (req, res)=>{
    const data = await getAll()
    res.json(data)
})

appointRoute.post('/appoint', async (req, res)=>{
    const data = req.body
    await postData(data)
})

appointRoute.get('/appoint/:id', async (req, res)=>{
    const id = req.params.id
    const data = await getUser(id)
    res.json(data)
})

module.exports = {
    appointRoute,
}