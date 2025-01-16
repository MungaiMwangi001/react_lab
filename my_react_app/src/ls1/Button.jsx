function Button(){

    let click = 0
    const handleclick =(e)=>{        
       ;
        if(click<3){
            click++
            console.log("you clicking me")
        }
        else{
            console.log("stop clicking me")
            //e.target.style.display ="none"            //logic
        }
        

    }

    return <>
    <button onClick={(e)=>handleclick(e)}>click me</button>
    </>

}
export default Button