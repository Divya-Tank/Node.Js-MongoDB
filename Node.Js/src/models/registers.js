
const mongoose = require("mongoose");
const EmployeeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    mobile: {
        type: Number,
        required: true
    },
    email: {
        type: String,
        required: true,
        // unique: true
    },
    date: {
        type: Date,
        required: true
    },
    uname: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    confirmpassword: {
        type: String,
        required: true
    }
})

//collection

const Register = new mongoose.model("Prac", EmployeeSchema);

module.exports = Register;