import React from "react";

function TaskManage({ task, index, deleteTask, moveTaskUp, moveTaskDown })
{
    return (
        <li>
            <span className="text">{task}</span>
            <button className="edit-button" onClick={() => console.log("Edit task")}>
                ✏️
            </button>
            <button className="delete-button" onClick={() => deleteTask(index)}>
                🗑️
            </button>
            <button className="move-button" onClick={() => moveTaskUp(index)}>
                ☝️
            </button>
            <button className="move-button" onClick={() => moveTaskDown(index)}>
                👇
            </button>
        </li>
    );
}

export default TaskManage;
