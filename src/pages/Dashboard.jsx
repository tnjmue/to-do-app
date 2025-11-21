import tasksData from "../assets/tasks.json";
import { useState } from "react";
import TaskCard from "../components/TaskCard";
import { Link } from "react-router-dom";

export default function Dashboard({tasks, handleDelete, handleAdd}) {

const [task, setTask] = useState("");

const handleFormSubmit = (e) => {
e.preventDefault();

const newTask = {
        id: "t" + (tasks.length + 1),
        task: task,
        completed: false,
        }
        
handleAdd(newTask);
setTask("");

}

    return (
        <div className="list-parent">
            <h1>To Dos</h1>
            <section className="list-container">
            {tasks.map((task) => {
                return (
                        
                        <TaskCard key={task.id } {...task} handleDelete={handleDelete} />
                        
                )
            })}
                <form className="task-card" onSubmit={handleFormSubmit}>
                    <label htmlFor="task">     +
                        <input type="text" name="task" id="task" value ={task} onChange={(e) => setTask(e.target.value)} />
                    </label>
                </form>
            </section>
        </div>
    )
}