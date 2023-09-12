const mongoose = require('mongoose')
mongoose.connect("mongodb+srv://ajinasmankadavu9544:ajinasmankadavu9544@cluster0.jxiwt1h.mongodb.net/HospitalDB?retryWrites=true&w=majority")


const schema = mongoose.Schema
const registerschema = new schema({
    loginId : {type:mongoose.Types.ObjectId,ref:"login_tb"},
    name:{type:String},
    password:{type:String},
    email:{type:String},
    mobileno:{type:String},
    place:{type:String},
})

const registermodel = mongoose.model('register_tb',registerschema)

module.exports= registermodel