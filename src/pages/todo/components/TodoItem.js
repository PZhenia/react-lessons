import styles from './TodoItem.module.css';

export default function TodoItem({ task }) {
    return (
        <div className={styles.todoItem}>
            <h4>{task.task}</h4>
        </div>
    );
}
