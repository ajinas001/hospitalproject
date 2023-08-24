const { default: mongoose } = require('mongoose')
const mongoose = require ('mongoose')
mongoose.connect("mongodb+srv://ajinasmankadavu9544:<ajinasmankadavu9544>@cluster0.jxiwt1h.mongodb.net/HospitalDB?retryWrites=true&w=majority")


const schema = mongoose.Schema
const registerschema = new schema({
    name:{type:string},
    password:{type:string},
    email:{type:string},
    mobileno:{type:string},
    place:{type:string},
})

const registermodel = mongoose.model('login_tb',registerschema)

module.exports= registermodel