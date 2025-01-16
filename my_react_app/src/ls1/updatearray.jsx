import React,{useState} from "react"

function MyUpdate(){
    const [fruits,setFruits] =useState(["apple", "pineapple", "Banana"]);

    function handleAddFruit(){
        const newFruit = document.getElementById("foodInput").value;
        document.getElementById("foodInput").value = ""
        setFruits((f)=>[...f, newFruit])

        }

    function handleRemoveFruit(index){
        setFruits(fruits.filter((_,i)=> i !== index))
        
    }

    return (
        <div>
            <h2>list of Fruits</h2>
            <ul>
                {fruits.map((fruit,index)=> 
                <li  onClick={()=>handleRemoveFruit(index)} key={index}> {fruit}</li>)}

            </ul>
            <input type="text"  id="foodInput" placeholder="Enter fruit name" />
            <button onClick={handleAddFruit}>Add fruits</button>
        </div>
    )
    
}

export default MyUpdate;