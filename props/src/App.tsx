import React from "react";
import Register from "./Pages/Register";
import { UserProvider } from "./Context/UserContext";

const App : React.FC = () =>{
  return(
    <UserProvider>
      <Register></Register>
    </UserProvider>
  )
}
export default App;







/*import React, { useState } from "react";
import Details from "./Details";
import Data from "./Data";
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";

const App : React.FC = ()  => {
  const [nombre, setNombre] = useState ('')
  
  return(
    <Router>
      <Routes>
        <Route path = '/' element = {<Details nombre = {nombre} setNombre= {setNombre}></Details>}></Route>
        <Route path = '/data' element = {<Data nombre = {nombre}></Data>}></Route>
      </Routes>
    </Router>
  )
}
export default App;*/
