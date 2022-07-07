const Input = ({value, onValueChange, handleAction}) => {
    return (
        <div>
            <input
                type="text"
                className={'rounded-sm mt-2 border-black border-2 p-1 font-medium mr-2'}
                placeholder={'Please enter your task'}
                value={value}
                onChange={(e) => onValueChange(e.target.value)}
            />
            <button
                className={
                    'border-2 rounded-xl p-1 mt-2 border-green-600 text-xl text-white bg-gray-500 bg-opacity-40 active:bg-cyan-700 transition-transform'
                }
                onClick={handleAction}
            >
                Add task
            </button>
        </div>
    )
}

export default Input
