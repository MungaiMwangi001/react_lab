
import React, {useContext} from "react";
import { userContext } from "./ComponentA";

function ComponentD(props){
    const value = useContext(userContext)
   
    return (
        <div className="container">
            
        container D
        <p>bye {value}</p>
       
        
        </div>
    )
}

export default ComponentD;