export const data = {
  todolist: {
    id: crypto.randomUUID(),
    title: 'Todolist',
    tasks: [
      {
        id: crypto.randomUUID(),
        title: 'Learn HTML'
      },
      {
        id: crypto.randomUUID(),
        title: 'Learn CSS'
      },
      {
        id: crypto.randomUUID(),
        title: 'Learn JS'
      },
      {
        id: crypto.randomUUID(),
        title: 'Learn React'
      },
    ], 
    addNewTaskDialog: {
      isOpen: false
    }
  }
}


let notifySubscriber = () => {};
export function subscribe(subscriber) {
  notifySubscriber = subscriber;
}

export function deleteTask(taskId) {
  const {tasks} = data.todolist
  //const {tasks} = data.todolist.tasks
  data.todolist.tasks = tasks.filter(t => t.id !== taskId)
  notifySubscriber()
}

export function addTask(TaskTitle) {
  const newTask = {
    id: crypto.randomUUID(),
    title: TaskTitle
  }
  data.todolist.tasks.push(newTask)
  notifySubscriber()
}

export function openAddNewTaskDialog() {
  data.todolist.addNewTaskDialog.isOpen = true;
  notifySubscriber();
}

export function closeAddNewTaskDialog() {
  data.todolist.addNewTaskDialog.isOpen = false;
  notifySubscriber();
}