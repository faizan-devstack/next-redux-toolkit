'use client'

import { createSlice, nanoid, PayloadAction } from '@reduxjs/toolkit';

interface Todo {
    id: string;
    text: string;
}

interface TodoState {
    todos: Todo[];
}

const initialState: TodoState = {
    todos: [
        { id: "1", text: "Steps to use Redux-Toolkit in your App." },
        { id: "2", text: "1) Install Redux Toolkit & React-Redux - Run: npm install @reduxjs/toolkit react-redux" },
        { id: "3", text: "2) Create Redux Store - Configure store in store.js and add reducers" },
        { id: "4", text: "3) Create Redux Slice - Define state, reducers, and actions in a slice file" },
        { id: "5", text: "4) Provide Store in index.js - Wrap your app with Provider and pass the store" },
        { id: "6", text: "5) Use Redux in Components - Use useSelector to get state and useDispatch to modify state" },
        { id: "7", text: "6) Done! - Your Redux state is now managed efficiently in your app" }
    ]
};

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action: PayloadAction<string>) => {
            const todo: Todo = {
                id: nanoid(),
                text: action.payload
            };
            state.todos.push(todo);
        },
        removeTodo: (state, action: PayloadAction<string>) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload);
        },
        updateTodo: (state, action: PayloadAction<{ id: string; newText: string }>) => {
            const { id, newText } = action.payload;
            const todoToUpdate = state.todos.find((todo) => todo.id === id);
            if (todoToUpdate) {
                todoToUpdate.text = newText;
            }
        }
    }
});

export const { addTodo, removeTodo, updateTodo } = todoSlice.actions;

export default todoSlice.reducer;
