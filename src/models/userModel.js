const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    id: mongoose.Schema.Types.ObjectId,

    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true

    },
    telephone: {
        type: Number,
        required: true
    },
    country: {
        type: String,
        enum: ["brasil"],
        required: true
    },
    state: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    cnpj: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    experiences: {
        type: String,
        required: true
    },
    brands: {
        type: String,
        required: true
    },
    password: {
        type:String,
        required: true,
        select: false // Não retorna a senha quando listado
      }

})


module.exports = mongoose.model('User', UserSchema);