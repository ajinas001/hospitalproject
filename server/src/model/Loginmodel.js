const mongoose = require('mongoose')
mongoose.connect("mongodb+srv://ajinasmankadavu9544:ajinasmankadavu9544@cluster0.jxiwt1h.mongodb.net/HospitalDB?retryWrites=true&w=majority")



const schema = mongoose.Schema
const loginschema = new schema({
    drid : {type:mongoose.Types.ObjectId,ref:"registerdoctor_tb"},
    name:{type:String},
    password:{type:String},
    // email:{type:String},
    role:{type:String},
    status:{type:String},
   
})

const loginmodel = mongoose.model('login_tb',loginschema)

module.exports= loginmodel