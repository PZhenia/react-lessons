import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../../../store/thunks/todosThunk";

import styles from "./TodoForm.module.css";

export default function TodoForm() {
    const [task, setTask] = useState("");
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!task.trim()) return;

        const newTodo = {
            title: task,
            completed: false,
            userId: 1,
        };

        dispatch(addTodo(newTodo));
        setTask("");
    };

    return (
        <div>
            <form onSubmit={handleSubmit} className={styles.todoForm}>
                <input
                    type="text"
                    placeholder="Type your task here..."
                    value={task}
                    onChange={(e) => setTask(e.target.value)}
                />
                <button type="submit">Add</button>
            </form>
        </div>
    );
}
