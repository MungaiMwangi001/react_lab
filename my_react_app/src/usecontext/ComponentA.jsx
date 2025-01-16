
import React, {useState,createContext} from "react";
import ComponentB from "./ComponentB";
import ComponentD from "./ComponentD";
export const userContext = createContext()

function ComponentA(){
    
   const [user, setUser] = useState("stevey")
    return (
        <div className="container">
        container A
        <p> hello {user}</p>
        <userContext.Provider value ={user}>
        <ComponentB user={user}/>
        

        </userContext.Provider>
        
        
        </div>
    )
}

export default ComponentA;