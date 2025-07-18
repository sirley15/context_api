import React from "react";
//cambia el valor que hay en el inicio
import { useNavigate } from "react-router-dom";

type Dataprops = {
    nombre : string;
    setNombre : (nombre : string) => {};
}
const Details : React.FC <Dataprops> = ({nombre,setNombre}) => {
    const navigate = useNavigate ();
    const irData = () => {
        navigate ('/data')
    }
    return (
        <div>
        <p> Este es el componente Details</p>
        <p>Nombre escrito es: {nombre}</p>
        <input type="text" onChange={(event)=>setNombre(event.target.value)}/>
        <button onClick={irData}>Data</button>
        </div>
    )
}
export default Details;