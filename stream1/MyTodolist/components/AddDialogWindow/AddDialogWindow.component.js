import { closeAddDialogWindow, data } from "../../data/data.js";

export function AddDialogWindow() {
  const containerElement = document.createElement('dialog');

  const titleElement = document.createElement('h3');
  titleElement.append('New Task');

  const inputElement = document.createElement('input');
  const saveButtonElement = document.createElement('button');
  saveButtonElement.append('save');
  const cancelButtonElement = document.createElement('button');
  cancelButtonElement.append('cancel');

  cancelButtonElement.addEventListener('click', () => {closeAddDialogWindow()});

  if(data.todolist.isAddDialogWindow){
    containerElement.open = true;
  }

  containerElement.append(titleElement);
  containerElement.append(inputElement);
  containerElement.append(saveButtonElement);
  containerElement.append(cancelButtonElement);

  return containerElement
}