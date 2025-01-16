import React, {useState} from "react";

function MyComponent23() {
    const [car, setCar] = useState({year:2020, 
        make:"Ford",
        model:"Mustang"
    });

    function handlemakechange(event){
        setCar(c=>({...c, make:event.target.value}))}

    
        
    
    function handlemodelchange(event){
        setCar(c=>({...c, model:event.target.value}))}

    function handleyearchange(event){
        setCar(c=>({...c, year:event.target.value}))}

    

    

    return (
        <div>
            <p>Your favourite car is: {car.year} {car.make} {car.model}</p>
            <input type="text" value={car.make} onChange={handlemakechange} />
            <input type="text" value={car.model} onChange={handlemodelchange}/>
            <input type="number" value={car.year} onChange={handleyearchange} />
        </div>
    )
    
       
}

export default MyComponent23;