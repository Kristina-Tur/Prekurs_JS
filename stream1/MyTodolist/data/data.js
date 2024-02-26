export const data = {
  todolist: {
    id: uniqueId(),
    title: 'Todolist',
    tasks: [
      {
        id: uniqueId(),
        title: 'Learn HTML'
      },
      {
        id: uniqueId(),
        title: 'Learn CSS'
      },
    ],
    isAddDialogWindow: true
  }
}

export function closeAddDialogWindow() {
  data.todolist.isAddDialogWindow = false;
    notifySubscriber();
  
}
export function openAddDialogWindow() {
  data.todolist.isAddDialogWindow = true;
    notifySubscriber();
}

function uniqueId() {
  return Math.floor(Math.random() * 100)
}

let notifySubscriber = () => {};
export function subscribe(subscriber) {
  notifySubscriber = subscriber;
}

export function createNewTask() {
  const newTask = {
    id: uniqueId(),
    title: '-------'
  }
  data.todolist.tasks.push(newTask);
  notifySubscriber();
}

export function deleteTask(id) {
  data.todolist.tasks = data.todolist.tasks.filter((t) => t.id !== id);
  notifySubscriber();
}
