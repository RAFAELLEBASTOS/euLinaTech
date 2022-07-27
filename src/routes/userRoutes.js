const express = require('express')
const routes = express.Router()
const controller = require('../controller/userController')

routes.get('/all', controller.getAll)
routes.get('/user/:id', controller.getById)
routes.post('/create', controller.created)

module.exports = routes