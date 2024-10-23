const mongoose = require('mongoose');

const schema = mongoose.Schema;

const PatientSchema = new schema({
    email : {type: String, unique: true},
    password : String,
    firsrName : String,
    lastName : String,
    healthIssue : String
});

const DoctorSchema = new schema ({
    email : {type : String, unique : true},
    password : String,
    firstName : String,
    lastName : String,
    specialized : String
})

const hospitalStuffSchema = new schema({
    email : {type : String , unique : true},
    password : String,
    firstName : String,
    lastName : String,
    position : String
})

const PatientModel = mongoose.model('Patient', PatientSchema);
const DoctorModel = mongoose.model('Doctor', DoctorSchema);
const HospitalStuffModel = mongoose.model('stuff', hospitalStuffSchema)

module.exports ={
    PatientModel,
    DoctorModel,
    HospitalStuffModel
}
