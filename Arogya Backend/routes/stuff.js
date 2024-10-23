require("dotenv").config()

const {Router} = require('express');
const stuffrouter = Router();
const becryptjs = require('bcrypt');
const jwt = require('jsonwebtoken')
const { HospitalStuffModel} = require('../db');

stuffrouter.post("/signup", async function (req , res){
    const {email , password, firstName, lastName, position} = req.body;
    const hashedPassword = await becryptjs.hash(password, 10);

    HospitalStuffModel.create({
        email: email,
        password: hashedPassword,
        firstName: firstName,
        lastName: lastName,
        position: position
    })
    res.json({
        message: "Hospital staff created successfully",
    })
})

stuffrouter.post("/login", async function (req, res){
    const {email, password} = req.body;
    const stuff = await HospitalStuffModel.findOne({email: email});

    if(!stuff){
        return res.status(404).json({
            message : "email not found"
        })
    }
    const isPasswordValid = await becryptjs.compare(password, stuff.password);
    if(!isPasswordValid){
        return res.status(404).json({
            message: "password is not valid"
        })
    }
    const token = jwt.sign({id: stuff._id}, process.env.JWT_S);

    res.json({
        message: "login successfully",
        token: token
    })
})

module.exports ={
    stuffrouter
}