const express = require("express")
const routes = express.Router()
const controller = require("../controller/userController")
const { checkAuth } = require("../middlewares/auth");

routes.get('/all', controller.getAll)
routes.get('/:id', checkAuth, controller.getById)
routes.post('/create', controller.createdUser)
routes.put("/update/:id", controller.updateUser)
routes.delete("/delete/:id", controller.deleteUser)
routes.post('/login', controller.login)

module.exports = routes