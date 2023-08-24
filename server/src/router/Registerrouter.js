const express = require('express')
const registermodel = require('../model/Registermodel')
const loginmodel = require('../model/Loginmodel')


const Registerrouter = express.Router()


Registerrouter.post('/save-login', async (req, res) => {

    try {
        const { name, password,email } = req.body;
        const oldusername = await loginmodel.findOne({ name })

        if (!oldusername) {
            return res.status(400).json({
                success: false,
                error: true,
                message: "username not found"
            })
        }

        const olduseremail = await loginmodel.findOne({ email })
        if (!olduseremail) {
            return res.status(400).json({
                success: false,
                error: true,
                message: "Email not found"
            })
        }
        const encrypt = await bcrypt.compare(password, olduser.password)
        if (encrypt == true) {
            if (olduser.role == 1) {
                const users = await Registermodel.findOne({ loginId: olduser._id })
                return res.status(200).json({
                    success: true,
                    error: false,
                    role: olduser.role,
                    login_id: olduser._id,
                    User_id: users._id,
                    message: "login successfully"
                })
            }
            if (olduser.role == 2) {
                const Restaurant = await Registerhotelmodel.findOne({ loginId: olduser._id })
                console.log(Restaurant);
                return res.status(200).json({
                    success: true,
                    error: false,
                    role: olduser.role,
                    login_id: olduser._id,
                    hotel_id: Restaurant._id,
                    message: "login successfully"
                })
            }
            if (olduser.role == 0) {
                const users = await Registermodel.findOne({ loginId: olduser._id })
                return res.status(200).json({
                    success: true,
                    error: false,
                    role: olduser.role,
                    login_id: olduser._id,
                    User_id: users._id,
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











module.exports = Registerrouter