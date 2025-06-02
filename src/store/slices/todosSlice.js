import { createSlice } from "@reduxjs/toolkit";

import {
    getAllTodos,
    getTodoById,
    addTodo,
    deleteTodo,
    toggleTodo
} from "../thunks/todosThunk";

const initialState = {
    todos: [],
    todo: null,
    loadingTodos: false,
    loadingTodo: false,
    error: "",
};

const todosSlice = createSlice({
    name: "todos",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getAllTodos.pending, (state) => {
                state.loadingTodos = true;
                state.error = "";
            })
            .addCase(getAllTodos.fulfilled, (state, action) => {
                state.loadingTodos = false;
                state.todos = action.payload;
            })
            .addCase(getAllTodos.rejected, (state, action) => {
                state.loadingTodos = false;
                state.error = action.payload || action.error.message;
            })
            .addCase(getTodoById.pending, (state) => {
                state.loadingTodo = true;
                state.error = "";
            })
            .addCase(getTodoById.fulfilled, (state, action) => {
                state.loadingTodo = false;
                state.todos = action.payload;
            })
            .addCase(getTodoById.rejected, (state, action) => {
                state.loadingTodo = false;
                state.error = action.payload || action.error.message;
            })
            .addCase(addTodo.fulfilled, (state, action) => {
                state.todos.push(action.payload);
            })
            .addCase(deleteTodo.fulfilled, (state, action) => {
                state.todos = state.todos.filter(todo => todo.id !== action.payload);
            })
            .addCase(toggleTodo.fulfilled, (state, action) => {
                const updated = action.payload;
                const index = state.todos.findIndex(t => t.id === updated.id);
                if (index !== -1) {
                    state.todos[index] = updated;
                }
            })

    },
});

export default todosSlice.reducer;