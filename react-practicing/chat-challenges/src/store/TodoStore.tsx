import {create} from "zustand/react";


 export type Todo = {
    id:number,
    message:string,
    completed:boolean
}

export type ToDoList = {
    todos:Todo[]
}



export const useTodoStore = create<ToDoList>((set) => (
    {
        todos:[{id:1 , message:'okay ',completed:true}],
        addTodo:(task:Todo)=> set((state:ToDoList) =>({
            todos:[...state.todos , task]
        }))
    }
))