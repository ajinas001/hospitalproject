const express = require('express')
const registermodel = require('../model/Registermodel')
const loginmodel = require('../model/Loginmodel')
var bcrypt = require('bcryptjs')
const appointmentmodel = require('../model/Appointmentmodel')
var jwt = require('jsonwebtoken');
const Checkauth = require('../middleware/Checkauth')
const registerdoctormodel = require('../model/Registerdoctormodel')
const doctornamemodel = require('../model/Doctornamemodel')
const bookingmodel = require('../model/Bookingsmodel')

const Registerrouter = express.Router()


Registerrouter.post('/save-login', async (req, res) => {

    try {
        const { name, password,email } = req.body;

        const user = await loginmodel.findOne({ name })
        console.log(password);
        if (!user) {
            return res.status(400).json({
                success: false,
                error: true,
                message: "username not found"
            })
        }

        // const olduseremail = await loginmodel.findOne({ email })
        // if (!olduseremail) {
        //     return res.status(400).json({
        //         success: false,
        //         error: true,
        //         message: "Email not found"
        //     })
        // }

        const encrypt = await bcrypt.compare(password, user.password)
        console.log(encrypt);
        if (encrypt == true) {
            if (user.role == 1) {
                const users = await registermodel.findOne({ loginId: user._id })
                var token = jwt.sign({user_role:user.role,login_id: user._id,User_id: users._id,}, 'key',{expiresIn: "2h"});
                return res.status(200).json({
          
                    success: true,
                    error: false,
                    role: user.role,
                    login_id: user._id,
                    User_id: users._id,
                    message: "login successfully",
                    token :token,
                })
            }
            if (user.role == 2) {
                const users = await registermodel.findOne({ loginId: user._id })
                console.log("hdgvg");
                return res.status(200).json({
                    success: true,
                    error: false,
                    role: user.role,
                    login_id: user._id,
                   User_id: users._id,
                    message: "login successfully"
                })
            }
            if (user.role == 0) {
                const users = await registermodel.findOne({ loginId: user._id })
                return res.status(200).json({
                    success: true,
                    error: false,
                    role: user.role,
                    login_id: user._id,
                    // User_id: users._id,
                    message: " admin logged successfully"
                })
            }


        }
        if (encrypt == false) {

            return res.status(400).json({
                success: true,
                error: false,
                message: "Incorrect password!!!"
            })
        }


    } catch (error) {
        return res.status(400).json({
            success: true,
            error: false,
            message: "error please check again"
        })
    }
})

Registerrouter.post('/save-register', async (req, res) => {
    try {

        const { name, password, email, mobileno, place } = req.body;
        console.log("fcrffr",req.body);

        const hashedPass = await bcrypt.hash(password, 12)
        console.log(hashedPass);
        const loginData = {
            name: name,
            password: hashedPass,
            email:email,
            role: "1",
            status: "0"
        }
        console.log("0212",loginData);
        const logins = await loginmodel(loginData).save()

        const details = {
            loginId: logins._id,
            place:place,
            mobileno: mobileno
        }
        console.log("det",details);
        const reg = await registermodel(details).save()

       


        if (reg) {
            return res.status(200).json({
                success: true,
                error: false,
                message: "added"
            })
        }
        else {
            return res.status(400).json({ message: "Something went wrong" })
        }
    }
    catch (error) {
        return res.status(400).json({
            success: false,
            error: true,
            message: "can't add"
        })
    }
})
Registerrouter.post('/save-registerdoctor', async (req, res) => {
    try {

        console.log('dhydywgyuwgfyujgwdygdgywugdy');
        const { name, password, email, department,drid } = req.body;
        console.log("fcrffr",req.body);

        const hashedPass = await bcrypt.hash(password, 12)
        console.log(hashedPass);
        const loginData = {
            name: name,
            password: hashedPass,
            email:email,
            role: "0",
            status: "0"
        }
        console.log("0212",loginData);
        
        const logins = await loginmodel(loginData).save()

        const docname = {
             loginId: logins._id,
            name : name
        }
        console.log(name);
        const login = await doctornamemodel(docname).save()


        

        const details = {
            loginId: logins._id,
        //    department:department,
        }
        console.log("det",details);
        const reg = await registerdoctormodel(details).save()

       


        if (reg) {
            return res.status(200).json({
                success: true,
                error: false,
                message: "added"
            })
        }
        else {
            return res.status(400).json({ message: "Something went wrong" })
        }
    }
    catch (error) {
        return res.status(400).json({
            success: false,
            error: true,
            message: "can't add"
        })
    }
})


Registerrouter.get('/view-doctor', async (req, res) => {
    try {
        
        
        const details = await doctornamemodel.find()

        console.log(details);
        if (details) {
            return res.status(200).json({
                success: true,
                error: false,
                data: details
            })

        }


    } catch (error) {

        return res.status(400).json({
            success: false,
            error: true,
            Response: "Not found"
        })

    }

})

Registerrouter.post('/save-appointment',Checkauth,async (req, res) => {
    try {

        const { name, age, place, doctor, phone,date,gender} = req.body;
        console.log("fcrffr",req.body);

        
        
        const appointmentData = {
        
            userid:req.UserData.loginid,
            name: name,
            age:age,
            place:place,
            doctor:doctor,
            phone:phone,
            date:date,
            gender:gender,
            status:"0"
           
        }
      
        console.log("datas",appointmentData);
        const data = await appointmentmodel(appointmentData).save()

       
        
        if (data) {
            return res.status(200).json({
               
                success: true,
                error: false,
                message: "appointment successfull"
            })
        }
        else {
            return res.status(400).json({ message: "Something went wrong" })
        }
    }
    catch (error) {
        return res.status(400).json({
            success: false,
            error: true,
            message: "can't book your appointment"
        })
    }
})

Registerrouter.get('/view-appointment/:id', async (req, res) => {
    try {
        const id = req.params.id
        console.log('ids', id);
        const details = await appointmentmodel.findOne({userid:id})
        console.log("detailss",details);
        
        if (details) {
            return res.status(200).json({
                success: true,
                error: false,
                data: details
            })

        }


    } catch (error) {

        return res.status(400).json({
            success: false,
            error: true,
            Response: "Not found"
        })

    }

})

Registerrouter.get('/view-patients/:doctor',async(req,res)=>{
    const doctor = req.params.doctor
    const patientdata = await appointmentmodel.find({doctor:doctor})
    console.log("doctorrr",doctor);
   
    try {
        if(patientdata){
            return res.status(200).json({
                success:true,
                error:false,
                data:patientdata
            })
        }
    } catch (error) {
        return res.status(400).json({
            message:"field is empty"
        })
    }
})

Registerrouter.post('/save-',Checkauth,async (req, res) => {
    try {

        const { name, age, place, doctor, phone,date,gender} = req.body;
        console.log("fcrffr",req.body);

        
        
        const appointmentData = {
        
            userid:req.UserData.loginid,
            name: name,
            age:age,
            place:place,
            doctor:doctor,
            phone:phone,
            date:date,
            gender:gender,
            status:"0"
           
        }
      
        console.log("datas",appointmentData);
        const data = await bookingmodel(appointmentData).save()

       
        
        if (data) {
            return res.status(200).json({
               
                success: true,
                error: false,
                message: "appointment successfull"
            })
        }
        else {
            return res.status(400).json({ message: "Something went wrong" })
        }
    }
    catch (error) {
        return res.status(400).json({
            success: false,
            error: true,
            message: "can't book your appointment"
        })
    }
})







module.exports = Registerrouter