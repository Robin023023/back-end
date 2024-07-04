const mongoose = require("mongoose");

const userBlood = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name is required'],
        trim: true,

    },
    zila: {
        type: String,
        required: [true, 'Zila is required'],
        trim: true,
    },
    upazila: {
        type: String,
        required: [true, 'Upazila is required'],
        trim: true,
    },
    blood: {
        type: String,
        required: [true, 'Blood type is required'],
        enum: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'], // Valid blood types
    },
    file: {
        type: String,
        required: [true, 'File is required'],
        trim: true,
    },
    mobile: {
        type: String,
        required: [true, 'Mobile number is required'],
        trim:true
    },
    createdOn: {
        type: Date,
        default: Date.now,
    }
});

module.exports = mongoose.model("blood",userBlood);
