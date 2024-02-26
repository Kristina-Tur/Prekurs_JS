import { Task } from "./Task/Task.js";

export function Tasks(tasks) {
  const listElement = document.createElement("ol");
  for (let i = 0; i < tasks.length; i++) {
    const task = tasks[i];
    const taskElement = Task(task);
    listElement.append(taskElement);
  }
  return listElement;
}
