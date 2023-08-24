const express = require('express')
const  mongoose = require('mongoose')
const bodyParser = require('body-parser')
const Registerrouter = require('./src/router/Registerrouter')
const addhotelrouter = require('./src/router/Addhotelrouter')





const app = express()



app.use(express.static('./public/'))
app.use(bodyParser())
app.use(express.urlencoded({extended:true}))
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );
    res.setHeader( 
      "Access-Control-Allow-Methods",
      "GET, POST, PATCH, PUT, DELETE, OPTIONS"
    );
    next();
  });
app.use('/save',Registerrouter)








const connectionString  ='mongodb+srv://ajinasmankadavu9544:ajinasmankadavu9544@cluster0.jxiwt1h.mongodb.net/RestaurantDB?retryWrites=true&w=majority'
mongoose.connect(connectionString).then(()=>{
    app.listen(
        4000,()=>{
            console.log("server started at http://localhost:4000");
})

}).catch((error)=>{
console.log('mongodb connection error');
})



    