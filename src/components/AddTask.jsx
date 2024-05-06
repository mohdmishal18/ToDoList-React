import React, { useState } from "react";

function AddTask({ onAddTask })
{
    const [newTask, setNewTask] = useState("");

    function handleInputChange(event) 
    {
        setNewTask(event.target.value);
    }

    function addTask() 
    {
        if (newTask.trim() !== "")
        {
            onAddTask(newTask);
            setNewTask("");
        }
    }

    return (
        <div>
            <input
                type="text"
                placeholder="Enter a task ..."
                value={newTask}
                onChange={handleInputChange}
            />
            <button className="add-button" onClick={addTask}>
                Add
            </button>
        </div>
    );
}

export default AddTask;