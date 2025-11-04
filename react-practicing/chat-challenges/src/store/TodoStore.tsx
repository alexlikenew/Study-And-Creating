import {create} from "zustand";

export type Todo = {
    id: number;
    message: string;
    completed: boolean;
};

export type TodoStore = {
    todos: Todo[];
    addTodo: (task: Todo) => void;
    deleteTodo: (id: number) => void,
    updateToDo: (task: Todo) => void,
    resetToDo: () => void,
};

export const useTodoStore = create<TodoStore>((set) => ({
    todos: [],
    addTodo: (task: Todo) =>
        set((state) => ({
            todos: [...state.todos, task],
        })),
    deleteTodo: (id: number) => set((state) => ({
        todos: state.todos.filter(item => item.id !== id)
    })),
    updateToDo: (task: Todo) => set((state) => ({
        todos: state.todos.map((item) => (item.id === task.id ? task : item)),
    })),
    resetToDo: () => set(() => ({
        todos: []
    }))
}));