import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./slices/todosSlice";
import logger from "./middlewares/logger";

const store = configureStore({
    reducer: {
        todos: todoReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;