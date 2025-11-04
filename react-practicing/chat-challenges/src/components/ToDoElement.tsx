import {type Todo, useTodoStore} from "../store/TodoStore.tsx";

export function ToDoElement(item: Todo) {
    const {deleteTodo, updateToDo} = useTodoStore()

    function changeCompleteStatusTodo() {
        const newItem = {...item, completed: !item.completed}
        updateToDo(newItem)
    }

    return (
        <div className = 'grid grid-cols-4 p-2 bg-blue-200'>
            <div>{item.id}</div>
            {item.completed ? <div>Ukonczone</div> : <div>Nie</div>}
            <div>
                {item.message}
            </div>
            <div className = 'w-full grid grid-cols-2 gap-2'>
                <button className = 'cursor-pointer bg-orange-300'>Edit</button>
                <button
                    className = 'cursor-pointer bg-red-300'
                    onClick = {() => deleteTodo(item.id)}
                >Delete
                </button>
                {item.completed ?
                    <button className = 'cursor-pointer bg-red-600' onClick = {changeCompleteStatusTodo}>X</button> :
                    <button className = 'cursor-pointer bg-green-600' onClick = {changeCompleteStatusTodo}>V</button>}
            </div>
        </div>
    );
}

export default ToDoElement;