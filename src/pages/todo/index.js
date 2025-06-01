import { useSelector } from "react-redux";

import TodoForm from "./components/TodoForm";
import TodoItem from "./components/TodoItem";

import styles from "./index.module.css";
import {useEffect} from "react";

export default function Todo() {
    const amountOfTodos = useSelector(state => state.todos.amountOfTodos);
    const todos = useSelector(state => state.todos.todos);

    useEffect(() => {
        const todoData = {
            todos,
            amountOfTodos
        };
        localStorage.setItem("todoData", JSON.stringify(todoData));
    }, [todos, amountOfTodos]);


    return (
        <div className={styles.todoWrapper}>
            <h2>TODO LIST</h2>
            <TodoForm />
            {todos.map(todo => (
                <TodoItem key={todo.id} task={todo} />
            ))}
            <p>Всього: <i>{amountOfTodos} завдань</i></p>
        </div>
    );
}
