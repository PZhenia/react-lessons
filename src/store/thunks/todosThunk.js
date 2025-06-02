import { createAsyncThunk } from "@reduxjs/toolkit";

const BASE_URL = "https://jsonplaceholder.typicode.com/todos"

export const getAllTodos = createAsyncThunk(
    "todos-redux/getAllTodos",
    async (_, { rejectWithValue }) => {
        try {
            const res = await fetch(`${BASE_URL}?_limit=10`);

            if(!res.ok) {
                throw new Error("Failed to fetch todos-redux");
            }

            return await res.json();
        } catch (err) {
            return rejectWithValue(err.message);
        }
    }
);

export const getTodoById = createAsyncThunk(
    "todos-redux/getTodoById",
    async (id, { rejectWithValue }) => {
        try {
            const res = await fetch(`${BASE_URL}/${id}`);

            if(!res.ok) {
                throw new Error("Todo not found!")
            }

            return await res.json();
        } catch (err) {
            return rejectWithValue(err.message);
        }
    }
);

export const addTodo = createAsyncThunk(
    "todos/addTodo",
    async (newTodo, { rejectWithValue }) => {
        try {
            const res = await fetch(`${BASE_URL}`, {
                method: "POST",
                body: JSON.stringify(newTodo),
                headers: { "Content-Type": "application/json" },
            });

            if (!res.ok) {
                throw new Error("Failed to add todo");
            }

            return await res.json();
        } catch (err) {
            return rejectWithValue(err.message);
        }
    }
);

export const deleteTodo = createAsyncThunk(
    "todos/deleteTodo",
    async (id, { rejectWithValue }) => {
        try {
            const res = await fetch(`${BASE_URL}/${id}`, { method: "DELETE" });
            if (!res.ok) {
                throw new Error("Failed to delete todo");
            }

            return id;
        } catch (err) {
            return rejectWithValue(err.message);
        }
    }
);

export const toggleTodo = createAsyncThunk(
    "todos/toggleTodo",
    async (todo, { rejectWithValue }) => {
        try {
            const res = await fetch(`${BASE_URL}/${todo.id}`, {
                method: "PATCH",
                body: JSON.stringify({ completed: !todo.completed }),
                headers: { "Content-Type": "application/json" },
            });
            if (!res.ok) {
                throw new Error("Failed to toggle todo");
            }

            return await res.json();
        } catch (err) {
            return rejectWithValue(err.message);
        }
    }
);
