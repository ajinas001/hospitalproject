const mongoose = require('mongoose')
mongoose.connect("mongodb+srv://ajinasmankadavu9544:ajinasmankadavu9544@cluster0.jxiwt1h.mongodb.net/HospitalDB?retryWrites=true&w=majority")


const schema = mongoose.Schema
const selectedTokenSchema = new mongoose.Schema({
    date: { type: Date, required: true },
    selectedTokens: [{ type: Number, required: true }],
  });
  
  const SelectedToken = mongoose.model('SelectedToken', selectedTokenSchema);

module.exports= SelectedToken

