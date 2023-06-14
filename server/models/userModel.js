const mongoose = require("mongoose");

// create schema
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true 
    },
    age: {
        type: Number,
        required: false
    },
    
},
{timestamps: true} // time pani dekhauxa anii
);

//we have to convert the blog schema into model
// model

const User= mongoose.model('User', userSchema);
module.exports = User ;
