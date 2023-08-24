const { default: mongoose } = require('mongoose')
const mongoose = require ('mongoose')
mongoose.connect("mongodb+srv://ajinasmankadavu9544:<ajinasmankadavu9544>@cluster0.jxiwt1h.mongodb.net/HospitalDB?retryWrites=true&w=majority")


const schema = mongoose.Schema
const loginschema = new schema({
    name:{type:string},
    password:{type:string},
    email:{type:string},
})

const loginmodel = mongoose.model('login_tb',loginschema)

module.exports= loginmodel