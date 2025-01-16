
import React,{useState, useEffect} from "react";

function Resize(){
    const[width,setWidth] = useState(window.innerWidth)
    const[height,setHeight] = useState(window.innerHeight)


    useEffect(()=>{
        window.addEventListener("resize", handleSizeChange)
        console.log("event listener Added");

    }, [])
        


    function handleSizeChange(){
        setWidth(window.innerWidth)
        setHeight(window.innerHeight)

    }


    return(
        <>
        <p>width:{width}</p>
        <p>height:{height}</p>        
        </>
        
    )
}

export default Resize