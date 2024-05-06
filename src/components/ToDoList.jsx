import React, { useState , useEffect } from "react";
import Swal from 'sweetalert2'
import AddTask from "./AddTask";
import TaskManage from "./TaskManage";

function ToDoList()
{
    const [tasks, setTasks] = useState(() =>
    {
        const localValue = localStorage.getItem("TASKS")
        if(localValue === null)return []
        return JSON.parse(localValue)
    });

    function addTask(newTask)
    {
        setTasks((prevTasks) => [...prevTasks, newTask]);
    }

    useEffect(() =>
    {
        localStorage.setItem("TASKS" , JSON.stringify(tasks))
    },[tasks])

    function deleteTask(index) 
    {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes",
        })
        .then((result) =>
        {
            if (result.isConfirmed)
            {
                const updatedTasks = tasks.filter((_, i) => i !== index);
                setTasks(updatedTasks);
                Swal.fire("Deleted!", "Your task has been deleted.", "success");
            }
        });
    }

    function moveTaskUp(index)
    {
        const updatedTasks = [...tasks]
        if(index > 0)
        {
            
            [ updatedTasks[index], updatedTasks[index - 1] ] = [ updatedTasks[index - 1] , updatedTasks[index] ]
            setTasks(updatedTasks)
        }            
    }

    function moveTaskDown(index)
    {
        const updatedTasks = [...tasks]
        if(index < updatedTasks.length - 1)
        {
            [updatedTasks[index] , updatedTasks[index + 1]] = [updatedTasks[index + 1] , [updatedTasks[index]]]
        }    
        setTasks(updatedTasks)
    }

    return (
        <div className="to-do-list">
            <h1>To-Do-List😎</h1>
            <AddTask onAddTask={addTask} />
            <ol>
                {tasks.map((task, index) => (
                    <TaskManage
                        key={index}
                        task={task}
                        index={index}
                        deleteTask={deleteTask}
                        moveTaskUp={moveTaskUp}
                        moveTaskDown={moveTaskDown}
                    />
                ))}
            </ol>
        </div>
    );
}

export default ToDoList;
