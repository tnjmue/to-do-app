import { useParams } from "react-router-dom"
import { useState } from "react";


export default function TaskDetails({tasks, handleEdit}) {
    const { taskId } = useParams();
    const task = tasks.find(t => t.id === taskId);
    const [isEditing, setIsEditing] = useState(false);
    const [editedTask, setEditedTask] = useState(task.task);

    const handleSave = () => {
        handleEdit(taskId, editedTask);
        setIsEditing(false);
    };

    return (
        <div>
            {isEditing ? (
                <input 
                    type="text"
                    value={editedTask}
                    onChange={(e) => setEditedTask(e.target.value)}
                    onBlur={handleSave}
                    autoFocus
                    className="edit-input"
                />
            ) : (
                <h1 onClick={() => setIsEditing(true)}>
                    {task.task}
                </h1>
            )}
        </div>
    )
}

/* export default function TaskDetails({tasks, handleEdit}) {
    const { taskId } = useParams();
    const task = tasks.find(t => t.id === taskId);
    const [isEditing, setIsEditing] = useState(false);
    const [editedTask, setEditedTask] = useState(task.task);

    const handleSave = () => {
        handleEdit(taskId, editedTask);
        setIsEditing(false);
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            handleSave();
        }
        if (e.key === 'Escape') {
            setEditedTask(task.task);
            setIsEditing(false);
        }
    };

    return (
        <div>
            {isEditing ? (
                <input 
                    type="text"
                    value={editedTask}
                    onChange={(e) => setEditedTask(e.target.value)}
                    onBlur={handleSave}
                    onKeyDown={handleKeyDown}
                    autoFocus
                    style={{
                        fontSize: '2em',
                        fontWeight: 'bold',
                        border: 'none',
                        background: 'transparent',
                        color: 'inherit',
                        width: '100%',
                        outline: 'none',
                        textAlign: 'center',
                        fontFamily: 'Lucida Console',
                        margin: '0.67em 0',
                        padding: 0
                    }}
                />
            ) : (
                <h1 onClick={() => setIsEditing(true)} style={{cursor: 'pointer'}}>
                    {task.task}
                </h1>
            )}
        </div>
    )
} */