import tasksData from "../assets/tasks.json";
import { useState } from "react";
import TaskCard from "../components/TaskCard";
import { Link } from "react-router-dom";

export default function Dashboard({tasks, handleDelete}) {


    return (
        <div className="list-parent">
            <h1>To Dos</h1>
            <section className="list-container">
            {tasks.map((task) => {
                return (
                        
                        <TaskCard key={task.id } {...task} handleDelete={handleDelete} />
                        
                )
            })}
            </section>
        </div>
    )
}