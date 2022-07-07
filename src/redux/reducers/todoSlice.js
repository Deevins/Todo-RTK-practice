import {createSlice} from '@reduxjs/toolkit'

let nextTodoId = 0

export const todoSlice = createSlice({
    name: 'todo',
    initialState: {
        todos: []
    },
    reducers: {
        addTodo: (state, action) => {
            state.todos.push({
                title: action.payload.title,
                id: new Date().toISOString(),
                isCompleted: false,
            })
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter(todo => todo.id !== action.payload.id);

        },
        toggleTodo: (state, action) => {
            const todo = state.todos.find((todo) => todo.id === action.payload.id)
            todo.isCompleted = !todo.isCompleted
        },
    },
})

// Action creators are generated for each case reducer function
export const {addTodo, removeTodo, toggleTodo} = todoSlice.actions

export default todoSlice.reducer
