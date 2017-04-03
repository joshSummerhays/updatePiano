const { mongoose } = require('../db/mongoose');
const validator = require('validator');

let WaitSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    },
    phone: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        minlength: 1,
        trim: true,
        validate: {
            validator: VALUE => validator.isEmail(VALUE),
            message: '{VALUE} is not a valid email'
        }
    },
    experience: {
        type: String,
        required: true
    },
    startDate: {
        type: String,
        required: true
    },
    age: {
        required: true,
        type: String
    },
    date: { 
        required: true,
        type: String
 }
});

let Wait = mongoose.model('Wait', WaitSchema);

module.exports = { Wait };