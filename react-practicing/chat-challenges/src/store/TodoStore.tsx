import {create} from "zustand";

export type Todo = {
    id: number;
    message: string;
    completed: boolean;
};

export type TodoStore = {
    todos: Todo[];
    addTodo: (task: Todo) => void;
    deleteTodo: (id: number) => void
};

export const useTodoStore = create<TodoStore>((set) => ({
    todos: [{id: 1, message: "okay", completed: true}],
    addTodo: (task: Todo) =>
        set((state) => ({
            todos: [...state.todos, task],
        })),
    deleteTodo: (id: number) => set((state) => ({
        todos: state.todos.filter(item => item.id !== id)
    }))
}));