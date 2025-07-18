import  Router  from "@adonisjs/core/services/router";
import UsersController from "../../app/controllers/users_controller.js";

const controller = new UsersController()

Router.post('/register',controller.register)
Router.post('/login',controller.login)

export default controller;