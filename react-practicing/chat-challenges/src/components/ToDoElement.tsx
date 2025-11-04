import {type Todo, useTodoStore} from "../store/TodoStore.tsx";

export function ToDoElement(item: Todo) {
    const handleDeleteToDo = useTodoStore((state) => state.deleteTodo)
    return (
        <div className = 'grid grid-cols-4 p-2 bg-blue-200' key = {item.id}>
            <div>{item.id}</div>
            {item.completed ? <div>Ukonczone</div> : <div>Nie</div>}
            <div>
                {item.message}
            </div>
            <div className = 'w-full grid grid-cols-2 gap-2'>
                <button className = 'cursor-pointer bg-orange-300'>Edit</button>
                <button
                    className = 'cursor-pointer bg-red-300'
                    onClick = {() => handleDeleteToDo(item.id)}
                >Delete
                </button>
            </div>
        </div>
    );
}

export default ToDoElement;