import {type Todo, useTodoStore} from "../store/TodoStore.tsx";


export function TodoList() {

    const toDoList = useTodoStore((state) => state.todos)
    const handleAddToDo = useTodoStore((state) => state.addTodo)
    const handleDeleteToDo = useTodoStore((state) => state.deleteTodo)

    function handleAddButton(e: React.FormEvent) {
        e.preventDefault()
        const newTask: Todo = {
            id: Date.now(),
            completed: false,
            message: 'test'
        }
        handleAddToDo(newTask)
    }

    return (
        <div className = 'w-full flex items-center justify-center flex-col gap-2 h-screen'>
            <div className = 'w-full max-w-1/2 flex flex-col gap-2'>
                <div className = 'grid grid-cols-4 bg-yellow-100 p-2'>
                    <div className = ''>ID</div>
                    <div>Status</div>
                    <div>Task</div>
                    <div>Options</div>
                </div>

                <div className = ''>
                    {toDoList.map((item) =>
                        <div className = 'grid grid-cols-4 p-2 bg-blue-200' key = {item.id}>
                            <div>{item.id}</div>
                            {item.completed ? <div>Ukonczone</div> : <div>Nie</div>}
                            <div>
                                {item.message}
                            </div>
                            <div className = 'w-full grid grid-cols-2 gap-2'>
                                <button>Edit</button>
                                <button onClick = {() => handleDeleteToDo(item.id)}>Delete</button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
            <div className = 'mt-4 w-full'>
                <form
                    onSubmit = {() => handleAddButton()} action = ""
                    className = 'flex flex-col gap-4 w-full items-center'
                >
                    <input placeholder = 'Task' type = "text" className = 'border-2 border-black p-2 w-full max-w-1/2'/>
                    <button className = 'bg-green-300 p-2 cursor-pointer'>Dodaj</button>
                </form>
            </div>


        </div>
    );
}

export default TodoList;