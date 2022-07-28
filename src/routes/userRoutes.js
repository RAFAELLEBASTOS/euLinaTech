const express = require("express")
const routes = express.Router()
const controller = require("../controller/userController")
const { checkAuth } = require("../middlewares/auth");

routes.get('/all', controller.getAll)
routes.get('/search/:id', checkAuth, controller.getById)
routes.post('/create', controller.createdUser)
routes.post('/login', controller.login)
routes.patch("/update/:id", controller.updateUser)
routes.delete("/delete/:id", controller.deleteUser)


module.exports = routes