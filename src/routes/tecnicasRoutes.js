const express = require('express')
const routes = express.Router()
const controller = require('../controller/tecnicasController')

routes.get('/listar', controller.Listar)
routes.get('/listar/:id', controller.GetPorId)
routes.post('/cadastrar', controller.CadastrarTecnicas)

module.exports = routes