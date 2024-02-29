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
const Booking = require('../model/Samplemodel')
const Appointment = require('../model/Samplemodel')
const SelectedToken = require('../model/Bookingsmodel')
const multer = require('multer')
const path = require('path')
const dutymodel = require('../model/Dutymodel')


const Registerrouter = express.Router()



const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        const destinationPath = path.join("../hospital/public/uploads");
        cb(null, destinationPath);
    },
    filename: function (req, file, cb) {
        const uniqueFileName = `${file.originalname}`;
        cb(null, uniqueFileName);
    }
});


const upload = multer({ storage: storage })

Registerrouter.post('/upload-image', upload.single('profileImage'), (req, res) => {
    res.status(200).json({
        message: "Image added"
    })
})

// Add a new schema to store selected tokens for each date


// Route to handle saving selected tokens
Registerrouter.post('/save-selected-tokens', Checkauth, async (req, res) => {
    const { date, selectedTokens } = req.body;
    console.log("d", req.body);

    try {
        let existingTokens = await SelectedToken.findOne({ date });

        if (!existingTokens) {
            existingTokens = new SelectedToken({ date, selectedTokens });
        } else {
            existingTokens.selectedTokens = selectedTokens;
        }

        await existingTokens.save();

        res.status(200).json({ message: 'Selected tokens saved successfully.' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Failed to save selected tokens.' });
    }
});


Registerrouter.post('/view_token', async (req, res) => {
    const date = req.body.date;
    const docid = req.body.docid;
    console.log(req.body);

    try {
        const data = await appointmentmodel.find({ date: date , doctor:docid });
        console.log(data);
        if (data && data.length > 0) {
            // Directly return the array without wrapping in another array
            return res.status(200).json({
                success: true,
                error: false,
                data: data, // Remove the array wrapper [data]
                message: "occupied tokens"
            });
        } else {
            return res.status(200).json({
                success: false,
                error: true,
                data: null,
                message: "no occupied tokens"
            });
        }
    } catch (error) {
        return res.status(400).json({
            success: false,
            error: true,
            message: "error please check again"
        });
    }
});






Registerrouter.post('/save-login', async (req, res) => {

    try {
        const { name, password, email } = req.body;

        const user = await loginmodel.findOne({ name })
        console.log(password);
        if (!user) {
            return res.status(400).json({
                success: false,
                error: true,
                message: "username not found"
            })
        }
        const encrypt = await bcrypt.compare(password, user.password)
        console.log(encrypt);
        if (encrypt == true) {
            if (user.role == 1) {
                const users = await registermodel.findOne({ loginId: user._id })
                var token = jwt.sign({ user_role: user.role, login_id: user._id, User_id: users._id, }, 'key', { expiresIn: "2h" });
                return res.status(200).json({

                    success: true,
                    error: false,
                    role: user.role,
                    login_id: user._id,
                    User_id: users._id,
                    message: "login successfully",
                    token: token,
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
                const users = await registerdoctormodel.findOne({ loginId: user._id })
                return res.status(200).json({
                    success: true,
                    error: false,
                    role: user.role,
                    login_id: user._id,
                    profileImage: users.profileImage,
                    department: users.department,
                    name: users.name,
                    // User_id: users._id,
                    message: " Doctor logged successfully"
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
        console.log("fcrffr", req.body);

        const hashedPass = await bcrypt.hash(password, 12)
        console.log(hashedPass);
        const loginData = {
            name: name,
            password: hashedPass,
            email: email,
            role: "1",
            status: "0"
        }
        console.log("0212", loginData);
        const logins = await loginmodel(loginData).save()

        const details = {
            loginId: logins._id,
            place: place,
            mobileno: mobileno
        }
        console.log("det", details);
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
    console.log("hello");
    try {
        const { name, password, email, mobileno, profileImage, department, qualification, place } = req.body;
        console.log("fcrffr", req.body);

        const hashedPass = await bcrypt.hash(password, 12)
        console.log(hashedPass);
        const loginData = {
            name: name,
            password: hashedPass,
            email: email,

            role: "0",
            status: "0"
        }
        console.log("0212", loginData);

        const logins = await loginmodel(loginData).save()

        const docname = {
            loginId: logins._id,
            name: name,

        }
        console.log(name);
        const login = await doctornamemodel(docname).save()




        const details = {
            name:name,
            loginId: logins._id,
            place: place,
            mobileno: mobileno,
            department: department,
            qualification: qualification,
            profileImage: profileImage,
        }
        console.log("det", details);
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
            message: "can't add doctor"
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

Registerrouter.post('/save-duty', async (req, res) => {
    try {
        const { fees, tokens, startingTime, endTime, date,docid,profileImage,department,name } = req.body
        console.log(req.body);
        const data = {
            fees: fees,
            tokens: tokens,
            startingTime: startingTime,
            endTime: endTime,
            date: date,
            docid:docid,
            profileImage:profileImage,
            department:department,
            name:name
        }

        const details = await dutymodel(data).save()

        console.log("detailssss", details);
        if (details) {
            return res.status(200).json({
                success: true,
                error: false,
                data: details,
                message: "Duty added"
            })
        }
        else {
            return res.status(400).json({
                success: false,
                error: true,
                message: "duty not added error occured"
            })
        }
    } catch (error) {
        return res.status(400).json({
            success: false,
            error: true,
            Response: "duty not added catch error"
        })
    }
})

Registerrouter.get('/view-dutydoctors', async (req, res) => {
    try {
        const todayDate = new Date();
        // Extracting year, month, and day components
        const year = todayDate.getFullYear();
        const month = todayDate.getMonth() + 1; // Months are zero-based, so we add 1
        const day = todayDate.getDate();

        // Constructing the date string in YYYY-MM-DD format
        const dateString = `${year}-${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`;

        console.log(dateString);
        
        const data = await dutymodel.find({ date: dateString });
        if (data && data.length > 0) {
            return res.status(200).json({
                success: true,
                error: false,
                data: data,
                message: "Duty doctors found"
            });
        } else {
            return res.status(404).json({
                success: false,
                error: true,
                message: "No duty doctors found for today"
            });
        }
    } catch (error) {
        return res.status(500).json({
            success: false,
            error: true,
            message: "Internal server error",
            errorDetails: error.message // Include the actual error message for debugging
        });
    }
});



Registerrouter.post('/save-appointment', Checkauth, async (req, res) => {
    try {
        const { name, age, place, doctor, phone, date, token } = req.body;
        console.log("fcrffr", req.body);



        const appointmentData = {

            userid: req.UserData.loginid,
            name: name,
            age: age,
            place: place,
            doctor: doctor,
            phone: phone,
            date: date,

            token: token,
            status: "0",

        }

        console.log("datas", appointmentData);
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
        const details = await appointmentmodel.findOne({ userid: id })
        console.log("detailss", details);

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

Registerrouter.get('/view-patients/:doctor', async (req, res) => {
    const doctor = req.params.doctor
    const patientdata = await appointmentmodel.find({ doctor: doctor })
    console.log("doctorrr", doctor);

    try {
        if (patientdata) {
            return res.status(200).json({
                success: true,
                error: false,
                data: patientdata
            })
        }
    } catch (error) {
        return res.status(400).json({
            message: "field is empty"
        })
    }
})

Registerrouter.post('/save-booking', Checkauth, async (req, res) => {
    try {
        console.log("excgfvbhj");
        const { name, age, place, doctor, phone, date, gender } = req.body;
        console.log("fcrffr", req.body);



        const appointmentData = {

            userid: req.UserData.loginid,
            name: name,
            age: age,
            place: place,
            doctor: doctor,
            phone: phone,
            date: date,
            gender: gender,
            status: "0"

        }

        console.log("datas", appointmentData);
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

Registerrouter.get('/view-qrdata/:_id', async (req, res) => {
    const id = req.params.id;
    const qrdata = await bookingmodel.find().sort({ _id: -1 }).limit(1)
    if (qrdata) {
        return res.status(200).json({
            success: true,
            error: false,
            data: qrdata,
        })
    }
    else {
        res.status(400).json({
            success: false,
            error: true,
            message: "data not found"
        })
    }

})







module.exports = Registerrouter