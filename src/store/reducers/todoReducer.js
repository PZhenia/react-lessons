import { ADD_TODO } from "../actions/actionTypes";

const initialState =
    JSON.parse(localStorage.getItem("todoData")) ||
    {
    todos: [],
    amountOfTodos: 0,
};

const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TODO:
            return {
                ...state,
                todos: [...state.todos, action.payload],
                amountOfTodos: state.amountOfTodos + 1,
            };
        default:
            return state;
    }
};

export default todoReducer;