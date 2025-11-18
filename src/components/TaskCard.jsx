import { useState } from "react";
import { Link } from "react-router-dom";

export default function TaskCard({id, task, completed, handleDelete}) {

    const [status, setStatus] = useState(completed);


    return (
        <article className="task-card">
            <div className="task-card--status">{status ? <span>✓</span> : <button onClick={() => setStatus(true)}>◯</button>} </div>
            <Link className="task-card--name" to={`/tasks/${id}`}>
            <div>{task}</div></Link>
            <div className="task-card--action">
                <a href="#" onClick={ () => { handleDelete(id) }}>x</a>
            </div>
        </article>
    )
}