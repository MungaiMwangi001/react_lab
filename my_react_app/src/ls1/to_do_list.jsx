import React, { useState } from "react";

function To_Do_List(){
    const[tasks, setTasks] = useState(["walk the dog", "plant a tree"]);
    const[newTask, setNewTasks] = useState();

    function handleInputchange(event){
        setNewTasks(event.target.value)        
    }
    
    
    function addTask(even){
        if (newTask.trim() !== ""){
            setTasks(t => [...t, newTask]) 
            setNewTasks("")

        }    }
    
    function deleteTask(index){
        const updatedTasks = tasks.filter((_,i) => i  !== index)
        setTasks(updatedTasks)
    
    }
    
    function moveUp(index){
        
        if(index>0){
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index-1]] =
             [updatedTasks[index-1], updatedTasks[index]]
             setTasks()

        }
    }
    
    function moveDown(index){
        if(index< tasks.length-1){
            const  updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index+1]] =
            [updatedTasks[index+1], updatedTasks[index]]
            setTasks()
            
        }
    
    }
    return(
        <div className="to-do-list">
            <div>
                <input type="text"  
                value={newTask}
                placeholder="Enter a new task here"
                onChange={handleInputchange} 
                />
                <button className="add-button" onClick={addTask}>Add</button>
            </div>
            <ol>
                               
                {tasks.map((task,index)=> <li key={index}>
                    
            
                    <span className="text">{task}   </span>
                    <button className="delet-button" onClick={() => deleteTask(index)} >delete</button>
                    <button className="movedown" onClick={() => moveDown(index)} >move down</button>
                    <button className="moveup" onClick={() => moveUp(index)} >move up</button>

                    
                </li>
            )}
            
            </ol>

        </div>
    )

}
export default To_Do_List;