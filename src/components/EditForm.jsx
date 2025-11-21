import { useState } from "react";

export default function EditForm({task, handleEdit}) {
    const [editedTask, setEditedTask] = useState(task.task);
    
    const handleSubmit = (e) => {
        e.preventDefault();
        handleEdit(task.id, editedTask);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text"
                value={editedTask}
                onChange={(e) => setEditedTask(e.target.value)}
            />
            <button type="submit">Update</button>
        </form>
    );
}