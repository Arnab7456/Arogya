require('dotenv').config();
const {Router }  = require('express');
const patientrouter = Router();
const {PatientModel} = require('../db');
const bcreypt = require('bcrypt')
const jwt = require('jsonwebtoken')


patientrouter.post("/signup", async function (req, res){
    const {email , password, firstName, lastName, healthIssue} = req.body;
    const hashPassword = await bcreypt.hash(password, 10);

    await PatientModel.create({
        email,
        password : hashPassword,
        firstName,
        lastName,
        healthIssue
    })
    res.json({
         message: "signup Succeeded"
    })
     
})
patientrouter.get("/", async function (req, res){
    const patients = await PatientModel.find().select('firstName lastName healthIssue');
    res.json(patients)
})

patientrouter.post("/signin", async function (req, res) {
    const { email, password } = req.body;

    // Find the patient by email
    const patient = await PatientModel.findOne({ email });

    // If patient is not found, return an error
    if (!patient) {
        return res.status(403).json({
            message: "Invalid email or password"
        });
    }

    // Compare the provided password with the hashed password
    const isPasswordValid = await bcreypt.compare(password, patient.password);
    
    if (!isPasswordValid) {
        return res.status(403).json({
            message: "Invalid email or password"
        });
    }

    // Generate JWT token
    const token = jwt.sign({ id: patient._id }, process.env.JWT_P);

    // Respond with the token
    res.json({
        message: "Login successful",
        token: token
    });
});

module.exports = {
    patientrouter
}
