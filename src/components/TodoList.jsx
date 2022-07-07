import {useSelector} from 'react-redux'

import TodoItem from './TodoItem'
import {memo} from "react";

const TodoList = memo(() => {
    const todos = useSelector((state) => state.todos.todos)

    return (
        <li className={'list-none m-5 mt-0 text-xl'}>
            {todos.length
                ? todos.map((todo) => (
                    <TodoItem
                        key={todo.id}
                        {...todo}
                    />))
                : <h1 className={'mt-10 font-extrabold text-4xl shadow-gray-100'}>Please add your first task!</h1>}
        </li>
    )
})

export default TodoList
