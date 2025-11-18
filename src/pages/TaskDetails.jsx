import { useParams } from "react-router-dom"
import { useState } from "react";

export default function TaskDetails({tasks}) {

    const { taskId } = useParams();
    const task = tasks.find(t => t.id === taskId);

    return (
        <div>
            <h1>{task.task}</h1>
        </div>

    )
}