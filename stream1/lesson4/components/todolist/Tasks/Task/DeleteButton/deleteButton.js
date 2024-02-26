import { deleteTask } from "../../../../../data/data.js";

export function deleteButton(taskId) {
  const deleteButtonElement = document.createElement('button');
  deleteButtonElement.append('❌');
  deleteButtonElement.addEventListener('click', /*колбэк*/() => {
    deleteTask(taskId);
  });
  return deleteButtonElement;
}
