import React, { useState } from "react";
import { userUser } from "../Context/UserContext";

const Register : React.FC = () =>{

    const [email,setEmail]= useState ('')
    const [password,setPassword]=useState ('')

    const {register} = userUser ()
    
    const guardar = async (event : React.FormEvent) => {
        event.preventDefault()
        await register (email,password)
    }
    return(
        <div>
            <form onSubmit={guardar}>
                <input type="email" onChange={(event)=>setEmail(event.target.value)} />
                <input type="password" onChange={(event)=>setPassword(event.target.value)}/>
                <button type="submit">Registrarse</button>
            </form>
        </div>

    )
}
export default Register;