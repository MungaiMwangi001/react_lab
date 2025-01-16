import React,{useState} from "react";
import { useOptimistic } from "react";

function ToDoList(){
    const [tasks,setTasks] = useState(["walk the dog", "run in the morning","eat breakfast"])
    const [newTask, setnewTask] = useState("")
    
    function handleinput(event){
        setnewTask(event.target.value);

    }

    function addTask(){
        if( newTask.trim() !== ""){
            setTasks(t => [...t,newTask])
            setnewTask("")

        }     
    }

    function deleteTask(index){
        const updatedTasks= tasks.filter((_,i)=>  i!== index );
        setTasks(updatedTasks)

    }

    function moveup(index){
        if(index>0){
            const  updatedTasks = [...tasks];
            [updatedTasks[index],updatedTasks[index-1]] = 
            [updatedTasks[index-1],updatedTasks[index]]
            setTasks(updatedTasks)

        }
       
    }

    function movedown(index){
        if(index<tasks.length - 1){
            const updatedTasks =[...tasks];
            [updatedTasks[index],updatedTasks[index+1]] =
            [updatedTasks[index+1], updatedTasks[index]]
            setTasks(updatedTasks);
        }
    }

    

    return(
        
        <div className="todolist">
            
            <div className="input-section">
                <input type="text"
                       placeholder="Enter a task"
                       value={newTask}
                       onChange={handleinput}
                        />
                        <button className="add-button"
                                onClick={addTask}>Add</button>

            </div>
            <ul>
                {
                    tasks.map((task,index)=>
                    <li key={index}>
                        <span>{task}</span>
                        <button className="delete-task" onClick={() => deleteTask(index)}>delete</button>
                        <button className="move-up" onClick={()=>moveup(index)}>move up</button>
                        <button className="move-down" onClick={()=> movedown(index)}>move down</button>
                       </li>
                    )
                }
            </ul>

        </div>
    )

}

export default ToDoList;