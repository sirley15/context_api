import { createContext,useContext,useState} from "react";
//Crear contexto
const UserContext = createContext ({
    user : '',
    login : async () => {},
    register :async () => {}
})
//Provider context 
export const UserProvider = ({children}) => { //el reactnode es cuando esta el set , se va a cambiar 
    const [user,setUser] = useState (null)
    const register = async (email:string,password:string) => {
        const res = await fetch('http://localhost:3333/register',{
            method : 'POST',
            headers :{'Content-Type' : 'application/json'},
            body : JSON.stringify({email,password})
        })
        const datos = await res.json()
        if (res) {
            setUser(datos.user)
        }
        else{
            setUser(datos.mensaje)

        }
    }
    const login = async(email:string,password:string) =>{
        const res = await fetch ('http://localhost:3333/login',{
             method : 'POST',
            headers :{'Content-Type' : 'application/json'},
            body : JSON.stringify({email,password})
        })
        const datos = await res.json()
        if (res) {
            setUser(datos.respuesta)
        }
        else{
            setUser(datos.msj)

        }
    }
    return(
        <UserContext.Provider value={{user,login,register}}>
            {children}
        </UserContext.Provider>
    )
}

export const userUser = () =>{
    return useContext (UserContext)
}

