import React,{useState,useRef,useEffect} from "react";

function MyComponent12(){
    let [number,setNumber] = useState(0);
    
    //useref -returns an object
    //-can only have one argument
    //const ref = useRef(0);
    //console.log(ref)

    const inputref = useRef(null)
    const inputref2= useRef(null)
    const inputref3 = useRef(null)


    useEffect(()=>{
        console.log("component rerendered")
    })

    function controlclick(){
        //ref.current ++
        //console.log(ref.current)
        inputref.current.focus();
        inputref.current.style.background = "yellow"
        inputref3.current.style.background = ""
        inputref2.current.style.background = ""
    }

    function controlclick2(){
        //ref.current ++
        //console.log(ref.current)
        inputref2.current.focus();
        inputref2.current.style.background = "yellow"
        inputref3.current.style.background = ""
        inputref.current.style.background = ""
    }

    function controlclick3(){
        //ref.current ++
        //console.log(ref.current)
        inputref3.current.focus();
        inputref3.current.style.background = "yellow"
        inputref.current.style.background = ""
        inputref2.current.style.background = ""
    }
    return(
        <>
        
        <button onClick={controlclick}>
            clickme
        </button>
        <input type="text"  ref={inputref} />

        <div>
        <button onClick={controlclick2}>
            clickme2
        </button>
        <input type="text"  ref={inputref2} />

        </div>

        <button onClick={controlclick3}>
            clickme3
        </button>
        <input type="text"  ref={inputref3} />
        </>
    )

}

export default MyComponent12;