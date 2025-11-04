import { useTodoStore} from "../store/TodoStore.tsx";


export function TodoList() {

    const toDoList = useTodoStore((state) => state.todos)
    console.log(toDoList)
    return (
        <div>
            {toDoList.map((item)=>
                <div key={item.id}>
                    {item.id}
                </div>)}
        </div>
    );
}

export default TodoList;