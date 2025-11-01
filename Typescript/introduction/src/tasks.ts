const taskForm = document.querySelector<HTMLFormElement>('.form')
const formInput = document.querySelector<HTMLInputElement>('.form-input')
const taskListElement = document.querySelector<HTMLUListElement>('.list')

type Task = {
    description: string;
    isCompleted: boolean;
}

const tasks: Task[] = loadTasks()

function loadTasks(): Task[] {
    const storedTasks = localStorage.getItem('tasks')
    return storedTasks ? JSON.parse(storedTasks) : []
}

tasks.forEach(renderTask)


taskForm?.addEventListener('submit', (event) => {
    event.preventDefault()
    const taskDescription = formInput?.value
    if (taskDescription) {
        // add task to list
        const task: Task = {
            description: taskDescription,
            isCompleted: false
        }
        addTask(task)

        // render tasks
        renderTask(task)

        // update localstorage
        updateStorage()


        formInput.value = '';
        return;
    } else {
        alert('Please enter a task description')
    }

})

function addTask(task: Task): void {
    tasks.push(task)
    console.log(tasks)
}

function renderTask(task: Task): void {
    const taskElement = document.createElement('li')
    taskElement.textContent = task.description
    // checkbox
    const taskCheckbox = document.createElement('input')
    taskCheckbox.type = 'checkbox'
    taskCheckbox.checked = task.isCompleted

    // toggle checkbox
    taskCheckbox.addEventListener('change', () => {
        task.isCompleted = !task.isCompleted
        updateStorage()
    })


    taskElement.appendChild(taskCheckbox)
    taskListElement?.appendChild(taskElement)

}

function updateStorage() {
    localStorage.setItem('tasks', JSON.stringify(tasks))
}