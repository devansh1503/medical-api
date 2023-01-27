const mongoose = require('mongoose')
const cors = require('cors')
const express = require('express')
const { userRoute } = require('./routes/users.route')
const { presRoute } = require('./routes/pres.route')
const { appointRoute } = require('./routes/appoint.route')
const cookieParser = require('cookie-parser')

const app = express()
app.use(express.json())
app.use(cookieParser())
app.use(cors({credentials: true, origin:'https://heartcare247.vercel.app/'}))

mongoose.connection.on('open',()=>{
    console.log("connected")
})
mongoose.connection.error('error',(err)=>{
    console.log(err)
})

async function connectDB(){
    await mongoose.connect("mongodb+srv://devansh1503:bandd007@cluster0.irh8e.mongodb.net/medicalsystem?retryWrites=true&w=majority")

    app.listen(7000, ()=>{
        console.log("http://localhost:7000/")
    })
}

app.use(userRoute)
app.use(presRoute)
app.use(appointRoute)

connectDB()