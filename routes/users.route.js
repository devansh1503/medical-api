const express = require('express')
const { getAll, postData, getUser, deleteUser, getDoc, getOneUser, getPatients } = require('../model/users.control')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const usersMongo = require('../model/users.mongo')

const userRoute = express.Router()

const maxAge = 60*60
const createToken = (item) => {
    return jwt.sign({item},"devanshAbrol",{
        expiresIn:maxAge
    })
}

userRoute.get('/users', async (req, res)=>{
    const data = await getAll()
    res.json(data)
})
userRoute.get('/doctors', async (req,res)=>{
    const data = await getDoc()
    res.json(data)
})
userRoute.get('/patients', async(req,res)=>{
    const data = await getPatients()
    res.json(data)
})

userRoute.post('/userspost', async (req, res)=>{
    const data = req.body
    const salt = await bcrypt.genSalt()
    data.password = await bcrypt.hash(data.password, salt)
    console.log(data)
    const response = await postData(data)
    res.json(response)
})

userRoute.get('/users/:pass/:name', async(req, res)=>{
    const name = req.params.name
    const pass = req.params.pass
    const data = await getUser(name, pass)
    const token = createToken(data.userName)
    res.cookie('loginCookie',token,{maxAge:maxAge*1000})
    console.log(token)
    console.log(req.cookies)
    res.json(data)
})
userRoute.get('/getUserData/:userName',async(req,res)=>{
    const data = await getOneUser(req.params.userName)
    res.json(data)
})
userRoute.get('/logout', async(req,res)=>{
    res.cookie('loginCookie','',{maxAge:1})
})

userRoute.delete('/usersdelete/:id', async(req, res)=>{
    const id = req.params.id
    await deleteUser(id)
})
module.exports = {
    userRoute,
}