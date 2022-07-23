require("dotenv-safe").config()
const express = require('express');
const app = express();

const cors = require('cors');
app.use(cors());

require('dotenv-safe').config();

const db = require('./database/mongoConfig');


app.use(express.json());

const tecnicasRoutes = require('./routes/tecnicasRoutes');


app.use("/tecnicas", tecnicasRoutes);

app.get('/', (req, res) => {
    res.status(200).send({
        title: "Reprograma -> euLinaTech - Projeto Final",
        version: "1.0.0",
        mensagem: "Olá, ser humano do outro lado da tela, aqui você encontra a primeira versão deste projeto, uma API focada em cadastro de Técnicas de Celulares de todo Brasil"

    })
})
db.connect();

module.exports = app;
