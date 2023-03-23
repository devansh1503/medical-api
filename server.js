const mongoose = require('mongoose')
const cors = require('cors')
const express = require('express')
const { userRoute } = require('./routes/users.route')
const { presRoute } = require('./routes/pres.route')
const { appointRoute } = require('./routes/appoint.route')
const cookieParser = require('cookie-parser')
const { chatRoute } = require('./routes/chat.route')


const app = express()
app.use(express.json())
app.use(cookieParser())
app.use(cors({credentials: true, origin:["http://localhost:3000","https://heartcare247.vercel.app"]}))

mongoose.connection.on('open',()=>{
    console.log("connected")
})
mongoose.connection.error('error',(err)=>{
    console.log(err)
})
var server = app.listen(5000)
async function connectDB(){
    await mongoose.connect("mongodb+srv://devansh1503:bandd007@cluster0.irh8e.mongodb.net/medicalsystem?retryWrites=true&w=majority")

    app.listen(7000, ()=>{
        console.log("http://localhost:7000/")
    })
}

app.use(userRoute)
app.use(presRoute)
app.use(appointRoute)
app.use(chatRoute)

connectDB()

const io = require('socket.io')(server,{
    pingTimeout:60000,
    cors:{
        origin:["http://localhost:3000","https://heartcare247.vercel.app"],
    }
})
io.on("connection",(socket)=>{
    
    socket.on('setup',(userId)=>{
        socket.join(userId)
    })

    socket.on('joinchat', (room)=>{

        socket.join(room._id)
    })

    socket.on('newmsg',(newMsg)=>{
        const recid = newMsg.reciever
        socket.to(recid).emit("msgrecieved",newMsg)
    })
})