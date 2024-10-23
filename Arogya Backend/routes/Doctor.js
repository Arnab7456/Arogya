require('dotenv').config();

const {Router } = require('express');
const DoctorRouter = Router();
const {DoctorModel} = require('../db');
const bcreypt = require('bcrypt');
const jwt = require('jsonwebtoken');

DoctorRouter.post("/signup", async function (req , res) {
    const {email , password, firstName, lastName, specialized} = req.body;
    const hashPassword = await bcreypt.hash(password, 10);

    DoctorModel.create({
        email ,
        password : hashPassword ,
        firstName ,
        lastName ,
        specialized 
    })
    res.json({
        message : "Doctor Signup successfully"
    })    
})
DoctorRouter.post("/login", async function (req, res) {
    const { email, password } = req.body;

    // Find the doctor by email (assuming DoctorModel is the correct model)
    const doctor = await DoctorModel.findOne({ email }); // Changed from PatientModel to DoctorModel

    // Check if the doctor exists
    if (!doctor) {
        return res.status(404).json({ // Use 404 for not found
            message: "Email not found"
        });
    }

    // Compare the provided password with the hashed password
    const isPasswordValid = await bcreypt.compare(password, doctor.password);

    // Check if the password is valid
    if (!isPasswordValid) {
        return res.status(403).json({
            message: "Invalid password"
        });
    }

    // Generate JWT token
    const token = jwt.sign({ id: doctor._id }, process.env.JWT_D);

    // Respond with success message and token
    res.json({
        message: "Login successful",
        token: token
    });
});
module.exports ={
    DoctorRouter
}
