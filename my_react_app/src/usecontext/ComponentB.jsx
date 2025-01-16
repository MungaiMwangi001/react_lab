
import React, {useState,useContext} from "react";
import ComponentC from "../Componentc";
import { userContext } from "./ComponentA";

function ComponentB(){
    const value = useContext(userContext)
   
    return (
        <div className="container">
        container B
        <p></p>
        pass by {value}

        
        <ComponentC/>
        </div>
    )
}

export default ComponentB;