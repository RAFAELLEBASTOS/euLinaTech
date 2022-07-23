const mongoose = require('mongoose');

const TecnicasSchema = new mongoose.Schema({
    id: mongoose.Schema.Types.ObjectId,
    nome: String,
    email: String,
    telefone: Number,
    País: String,
    Estado: String, 
    Cidade: String 

})


module.exports = mongoose.model('tecnicas',TecnicasSchema);