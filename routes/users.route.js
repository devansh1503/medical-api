const express = require('express')
const { getAll, postData, getUser, deleteUser } = require('../model/users.control')

const userRoute = express.Router()

userRoute.get('/users', async (req, res)=>{
    const data = await getAll()
    res.json(data)
})

userRoute.post('/userspost', async (req, res)=>{
    const data = req.body
    console.log(data)
    await postData(data)
})

userRoute.get('/users/:pass/:name', async(req, res)=>{
    const name = req.params.name
    const pass = req.params.pass
    const data = await getUser(name, pass)
    console.log(data)
    res.json(data)
})

userRoute.delete('/usersdelete/:id', async(req, res)=>{
    const id = req.params.id
    await deleteUser(id)
})
module.exports = {
    userRoute,
}