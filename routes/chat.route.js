const express = require('express')
const { newchat } = require('../model/chat.control')
const { getAllmsg, postmsg } = require('../model/message.control')

const chatRoute = express.Router()

chatRoute.post('/chat',async(req,res)=>{
    const{id1, id2} = req.body 
    const data = await newchat(id1,id2)
    res.json(data)
})

chatRoute.post('/getmsg', async(req,res)=>{
    const chatId = req.body.chatId
    const data = await getAllmsg(chatId)
    res.json(data)
})

chatRoute.post('/msg', async(req,res)=>{
    const newmsg = req.body
    const data = await postmsg(newmsg)
    res.json(data)
})

module.exports = {
    chatRoute,
}