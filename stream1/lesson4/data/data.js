export const data = {
  todolist: {
    id: createUniqueId(),
    title: "Tododlist",
    tasks: [
      {
        id: createUniqueId(),
        title: "learn HTML"
      },
      {
        id: createUniqueId(),
        title: "learn CSS"
      },
    ],
    isAddTaskDialogOpen: false
  }
}

export function openAddTaskDialog() {
  data.todolist.isAddTaskDialogOpen = open;
  notifySubscriber()
}

export function closeAddTaskDialog() {
  data.todolist.isAddTaskDialogOpen = false;
  notifySubscriber()
}

let notifySubscriber = null;//или функция заглушка

export function subscribe/*подписаться*/(subscriber/*колбэк*/) {
  notifySubscriber = subscriber;
}

function createUniqueId() {
  return Math.floor(Math.random() * 100)
}

export function createTask(newTitle) {
  const newTask = {
    id: createUniqueId(),
    title: newTitle
  }
  data.todolist.tasks.push(newTask)
  notifySubscriber()//вызываем функцию-колбэк для отрисовки
}

export function deleteTask(id) {
  //alert("deleted") можно так сделать проверку работает ли функция

  data.todolist.tasks = data.todolist.tasks.filter((t) => t.id !== id);
  //присвой такие же таски, но отфильтрованные. Будут приходить таски, но если айди таски равна айди который в параметре, то она не попадет во все таски. Таким образом выбросим ненужную таску
  notifySubscriber()
}