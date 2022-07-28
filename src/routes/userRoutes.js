const express = require("express")
const routes = express.Router()
const controller = require("../controller/userController")
const { checkAuth } = require("../middlewares/auth");

routes.get('/', controller.getAll)
routes.get('/:id', controller.getById)
routes.post('/', controller.createdUser)
routes.post('/login', controller.login)
routes.patch("/:id", controller.updateUser)
routes.delete("/:id", controller.deleteUser)


module.exports = routes