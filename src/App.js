import React, {useState} from 'react'

import TodoList from './components/TodoList'
import Input from './components/Input'
import {useDispatch} from 'react-redux'
import {addTodo} from "./redux/reducers/todoSlice";

const App = () => {
    const [title, setTitle] = useState('')
    const dispatch = useDispatch()

    const handleAction = () => {
        if (title.trim().length) {
            dispatch(addTodo({title}))
            setTitle('')

        }
    }

    return (
        <div
            className={
                'bg-gradient-to-r from-red-700 via-violet-900 to-purple-900 items-center  flex flex-col h-screen w-screen'
            }
        >
            <h1 className={'font-extrabold text-4xl border-b-2 border-purple-300'}>
                Task list
            </h1>
            <Input
                value={title}
                onValueChange={setTitle}
                handleAction={handleAction}
            />
            <TodoList/>
        </div>
    )
}

export default App


// TODO: fix App re-render on input change
// TODO: implement editing todo