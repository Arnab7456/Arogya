require('dotenv').config();

const express = require('express');
const app = express();
const mongoose = require('mongoose');
const port = 3000;
app.use(express.json());

const {patientrouter} = require('./routes/patient') 
app.use("/patient", patientrouter);

async function main() {
     await mongoose.connect(process.env.MONGO);
    app.listen(port, ()=>{
        console.log("server connected");
    })
}

main();