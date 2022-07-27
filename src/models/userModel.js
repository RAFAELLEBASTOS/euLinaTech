const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    id: mongoose.Schema.Types.ObjectId,

    name:{
     type: String,
     required: true },
    email: {
     type: String,
     required: true },
    telephone:{
     type: Number,
     required: true }, 
    country:{
     type: String,
     enum: ["brasil"],
     required: true }, 
    state:{
     type: String,
     required: true }, 
    city:{
     type: String,
     required: true }, 

})


module.exports = mongoose.model('User',UserSchema);