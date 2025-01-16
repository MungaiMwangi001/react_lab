import React, {useState} from "react"
function Counter(){
    const [count, setCount] = useState(0);


    const incrementation = () =>{
        setCount(count+1)
    }

    const decrementation = () => {
        setCount(count-1)
    }

    const resetCounter = () => {
        setCount(0)

    }
    return (
        <div className="display-container"> 
            

        <p className = "count-display">{count}</p>
        <button className="counter-button" onClick={incrementation}>increment</button>
        <button className="counter-button" onClick={resetCounter}>Reset</button>
        <button className="counter-button" onClick={decrementation}>decrement</button> 

        
        </div>
    )


}

export default Counter