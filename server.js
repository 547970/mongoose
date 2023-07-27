const express=require('express')
const mongoose=require('mongoose')

const app=express()
const port=5000

mongoose.connect('mongodb+srv://jeghama0:HMED.jegham.54797040@cluster0.xg00l3n.mongodb.net/haja?retryWrites=true&w=majority')
.then(()=>console.log("db connected"))

app.use('/',require('./routes/clientroutes'))

app.listen(port,(err)=>{err ? console.log(err):console.log("server is running in port:",port)})