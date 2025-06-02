import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllTodos } from '../../store/thunks/todosThunk';

import TodoForm from "./components/TodoForm";
import TodoItem from "./components/TodoItem";

import styles from "./index.module.css";

const TodosRedux = () => {
    const dispatch = useDispatch();
    const { todos, loadingTodos, error } = useSelector(state => state.todos);

    useEffect(() => {
        dispatch(getAllTodos());
    }, []);

    if(loadingTodos) return <h2>Loading todos....</h2>
    if(error) return <span style={{color: "#831616"}}>Error: {error}</span>

    return (
        <div className={styles.todoWrapper}>
            <h1>Redux Todos</h1>
            <TodoForm />
            <ul className={styles.todoUl}>
                {todos.map(todo => (
                    <li key={todo.id}>
                        <TodoItem todo={todo} />
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TodosRedux;
