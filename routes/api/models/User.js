//Import mongoose for database interaction
const mongoose = require('mongoose');

//create the schema to use
const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: { //have user login with email
        type: String,
        required: true,
        unique: true //only 1 registration per email
    },
    password: {
        type: String,
        required: true
    },
    avatar: {
        type: String
    },
    date: {
        type: Date,
        default: Date.now
    }
}); 

//Set variable called user set to mongoose.model which will be called user and uses UserSchema
module.exports = User = mongoose.model('user', UserSchema);