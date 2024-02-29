const mongoose = require('mongoose')
mongoose.connect("mongodb+srv://ajinasmankadavu9544:ajinasmankadavu9544@cluster0.jxiwt1h.mongodb.net/HospitalDB?retryWrites=true&w=majority")


const schema = mongoose.Schema
const appointmentschema = new schema({
    userid : {type:mongoose.Types.ObjectId,ref:"login_tb"},
    name:{type:String},
    age:{type:String},
    place:{type:String},
    doctor:{type:mongoose.Types.ObjectId,ref:""},
    phone:{type:String},
    date:{type:String},
    token:{type:Number},
    // gender:{type:String},
    status:{type:String}
})

const appointmentmodel = mongoose.model('appointment_tb',appointmentschema)

module.exports= appointmentmodel