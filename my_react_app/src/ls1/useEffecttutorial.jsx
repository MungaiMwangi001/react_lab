import React,{useState, useEffect} from "react";

function MyComponent33(){
    const[count,setCount] = useState(0);
    const[color,setColor] = useState("green")

    useEffect(()=>{
        document.title = `Count: ${count} ${color}`
    }, [color])

    function addCount(){
        setCount(()=> count+1)
    }
    
    function subtractCount(){
        setCount(()=> count-1)
    }

    function changeColor(){
        setColor(c=>{c === "green" ? "blue": "green"});
    }

    return(
        <div>
            <p style={{color: color}}>Count: {count}</p>
            <button onClick={addCount}>Add</button>
            <button onClick={subtractCount}>subtract</button>
            <br />
            <button style={{color:color}} onClick={changeColor}>changeColor</button>
            
            
        </div>
    )
}

export default MyComponent33;