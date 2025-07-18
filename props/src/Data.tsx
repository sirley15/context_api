import React from "react";

const Data : React.FC <{nombre:string}> =({nombre}) =>{
    return(
        <div>
            <p>ESTE ES EL COMPONENTE DATA</p>
            <p>{nombre}</p>
        </div>
    )
}
export default Data;