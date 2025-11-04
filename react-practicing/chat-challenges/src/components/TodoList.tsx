import {type Todo, useTodoStore} from "../store/TodoStore.tsx";
import {useState} from "react";
import ToDoElement from "./ToDoElement.tsx";


export function TodoList() {

    const toDoList = useTodoStore((state) => state.todos)
    const handleAddToDo = useTodoStore((state) => state.addTodo)

    const [message, setMessage] = useState('')

    function handleAddButton(e: React.FormEvent) {
        e.preventDefault()
        const newTask: Todo = {
            id: Number(Date.now()),
            completed: false,
            message: message
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
                        <ToDoElement key = {item.id}  {...item}/>
                    )}
                </div>
            </div>
            <div className = 'mt-4 w-full'>
                <form
                    onSubmit = {handleAddButton} action = ""
                    className = 'flex flex-col gap-4 w-full items-center'
                >
                    <input
                        value = {message} onChange = {(e) => setMessage(e.target.value)} placeholder = 'Task'
                        type = "text" className = 'border-2 border-black p-2 w-full max-w-1/2'
                    />
                    <button className = 'bg-green-300 p-2 cursor-pointer'>Dodaj</button>
                </form>
            </div>


        </div>
    );
}

export default TodoList;