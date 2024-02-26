import { deleteTask } from "../../../../../data/data.js";

export function deleteButton(taskId) {
  const buttonElement = document.createElement('button');
  buttonElement.append('❌');

  buttonElement.addEventListener('click', () => {
    deleteTask(taskId)
  })
  return buttonElement;
}