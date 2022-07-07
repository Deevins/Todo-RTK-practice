import React from 'react'
import {useDispatch} from "react-redux"

import {removeTodo, toggleTodo} from '../redux/reducers/todoSlice'

const TodoItem = ({title, isCompleted, id}) => {

    const dispatch = useDispatch()

    return (
        <ul
            className={
                'flex h-16 w-67 pr-4 text-center grid grid-rows-2  mt-6 first-of-type:mt-3  inline items-center  border-purple-300 border-2 pl-5 pr-2 rounded-2xl bg-gradient-to-br from-slate-400 via-cyan-600 to-amber-700'
            }
        >
            <div className={'inline-block items-center relative'}>
                <div
                    className={`w-6 h-6 rounded-2xl absolute -left-5 bottom-1/4 ${
                        isCompleted ? 'bg-green-500' : 'bg-red-600'} hover:cursor-pointer`}
                    onClick={() => dispatch(toggleTodo({id}))}
                />
                <p className={'pl-1 font-bold'}>{title}</p>
            </div>

            <div className={'flex  space-x-28 mb-1.5'}>
                <button
                    className={
                        'border-2 border-black rounded-md pr-1 pl-1 text-white active:bg-cyan-700 transition-transform'
                    }
                >
                    Edit
                </button>
                <button
                    className={
                        'border-2 border-black rounded-md pr-1 pl-1 text-white active:bg-cyan-700 transition-transform'
                    }
                    onClick={() => dispatch(removeTodo({id}))}
                >
                    Delete
                </button>
            </div>
        </ul>
    )
}

export default TodoItem
