const express = require("express")
const routes = express.Router()
const controller = require("../controller/userController")
const { checkAuth } = require("../middlewares/auth");

routes.get('/', checkAuth, controller.getAll)
routes.get('/:id',checkAuth, controller.getById)
routes.post('/', controller.createdUser)
routes.post('/login', controller.login)
routes.patch("/:id",checkAuth, controller.updateUser)
routes.delete("/:id", checkAuth, controller.deleteUser)


module.exports = routes