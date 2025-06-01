import { ADD_TODO } from "./actionTypes.js";

export const addTodo = (task) => {
    return {
        type: ADD_TODO,
        payload: {
            id: `${task}-${Math.random()}`,
            task,
            status: false,
        }
    }
}
