import UserService from '#services/user_service'
import { error } from 'node:console'

const userService = new UserService()
export default class UsersController {
  async register({ request, response }) {
    try {
      const { email, password } = request.body()
      const user = await userService.register(email, password)
      return response.json({ msj: 'usuario registrado', user })
    } catch (e) {
      return response.json({ error: e.message })
    }
  }

  async login({ request, response }) {
    try {
      const { email, password } = request.body()
      const respuesta = await userService.login(email, password)
      return response.json({ msj: 'login exitoso', respuesta })
    } catch (e) {}
  }
}