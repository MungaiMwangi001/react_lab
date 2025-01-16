
import React, {useState} from "react";


function MyComponent(){
    const [name, setName] = useState("")
    const [isemployed, setIsEmployed] = useState(false);
    const updateName = () => {
        //name = "steve"
        setName("wavey")
    }
    const employmentStatus = () => {
        setIsEmployed(!isemployed);
    }



    return (
        <div>
            
            <p>Name:{name}</p>
            <button onClick={updateName}>Set Name</button>

            <p>isEmployed:{isemployed ? "Yes": "No" }</p>
            <button onClick={employmentStatus}>toggle employment</button>
        </div>
    )

}

export default MyComponent;