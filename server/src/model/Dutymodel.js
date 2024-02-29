const mongoose = require('mongoose')
mongoose.connect("mongodb+srv://ajinasmankadavu9544:ajinasmankadavu9544@cluster0.jxiwt1h.mongodb.net/HospitalDB?retryWrites=true&w=majority")


const schema = mongoose.Schema
const dutyschema = new schema({
   docid:{type:mongoose.Types.ObjectId},
    fees:{type:Number},
    startingTime:{type:String},
    endTime:{type:String},
    date:{type:String},
    tokens:{type:Number},
    profileImage:{type:String},
    department:{type:String},
    name:{type:String}
   
})

const dutymodel = mongoose.model('duty_tb',dutyschema)

module.exports= dutymodel