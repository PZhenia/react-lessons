import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { addTodo } from "../../../store/actions/todoAction";

import styles from "./TodoForm.module.css";

export default function TodoForm() {
    const [task, setTask] = useState("");
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!task.trim()) return;

        dispatch(addTodo(task));
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
