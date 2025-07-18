/* eslint-disable prettier/prettier */
import User from "#models/user";
import bcrypt from 'bcrypt'


export default class UserService {
  static login(email: any, password: any) {
    throw new Error('Method not implemented.');
  }
  static register(email: any, password: any) {
    throw new Error('Method not implemented.');
  }
  async register(email:string, password:string){
    //findBy create
    const user= await User.findBy('email', email) //select * from users where email=""
    if (user) {
      return("emeil ya exixte")
    }
    else {
      const nuevacontraseña = await bcrypt.hash(password,10)
      const user = await User.create({email,password:nuevacontraseña})
      return user //select * from user ultimo registro
    }
  }
  async login(email:string, password:string) {
    //select * from user where email="" id,email,password
    const user = await User.findBy('email', email)
    if (user){
      const resp = bcrypt.compare(password,user.password)
      if (resp) {
        return ("login correcto")
      }
      else {
        return ("Contraseña incorrecta")
      }
    }
    else {
      return ("usuario no encontrado")
    }
  }
}
