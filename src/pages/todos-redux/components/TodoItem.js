import { useDispatch } from 'react-redux';
import { toggleTodo, deleteTodo } from '../../../store/thunks/todosThunk';

import styles from './TodoItem.module.css';

export default function TodoItem({ todo }) {
    const dispatch = useDispatch();

    const handleToggle = () => {
        dispatch(toggleTodo(todo));
    };

    const handleDelete = (e) => {
        e.stopPropagation();
        dispatch(deleteTodo(todo.id));
    };

    return (
        <div
            className={`${styles.todoItem} ${todo.completed ? styles.completed : styles.todoItem}`}
            onDoubleClick={handleToggle}
        >
            <h4>{todo.title}</h4>
            <button onClick={handleDelete}>x</button>
        </div>
    );
}
