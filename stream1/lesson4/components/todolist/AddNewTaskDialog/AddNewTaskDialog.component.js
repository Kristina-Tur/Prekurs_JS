import { closeAddTaskDialog, createTask, data } from "../../../data/data.js";

export function AddNewTaskDialog() {
  const container = document.createElement('dialog');
  const titleElement = document.createElement('h2');
  titleElement.append('New Task');
  const inputElement = document.createElement('input');
  const saveButtonElement = document.createElement('button');
  saveButtonElement.append("save");
  saveButtonElement.addEventListener('click', () => {
    createTask(inputElement.value);
    closeAddTaskDialog()
  })

  const cancelButtonElement = document.createElement('button');
  cancelButtonElement.append("cancel");
  cancelButtonElement.addEventListener('click', () => {
    closeAddTaskDialog();
  })

  if (data.todolist.isAddTaskDialogOpen) {
    container.open = true;
  }

  container.append(titleElement);
  container.append(inputElement);
  container.append(saveButtonElement);
  container.append(cancelButtonElement);

  return container
}