const jwt = require ("jsonwebtoken")
  

module.exports = (req,res,next)=>{
    console.log("tok",req.headers);
    try{
        const token = req.headers.authorization.split(" ")[1];
        console.log(token);
        const decodedtoken = jwt.verify(token,"key");
        req.UserData = {loginid:decodedtoken.login_id,userid:decodedtoken.User_id,role:decodedtoken.user_role,};
        console.log("heyyy",req.UserData.userid);
        next();

    }
    catch(error){
        res.status(401).json({message:"Auth failed please login"})
    }
};