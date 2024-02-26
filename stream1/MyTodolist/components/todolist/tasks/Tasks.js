import { Task } from "./task/Task.js";

export function Tasks(tasks) {
  const listElement = document.createElement('ol');
  for (let i = 0; i < tasks.length; i++) {
    const task = tasks[i];
    listElement.append(Task(task))
  }
  return listElement
}

