import { addItem, closeDialogWindow, data } from "../../data/data.js";

export function addOpenWindowDialog() {
  const dialogElement = document.createElement('dialog');
  if (data.isDialogWindowOpen) {
    dialogElement.open = true;
  }

  const titleElement = document.createElement('h4');
  titleElement.append('New Task');

  const inputElement = document.createElement('input');
  inputElement.placeholder = 'Input your new task';
  
  const saveButtonElement = document.createElement('button');
  saveButtonElement.append('save');
  saveButtonElement.addEventListener('click', () => {
    addItem(inputElement.value);
    closeDialogWindow();
  })

  const cancelButtonElement = document.createElement('button');
  cancelButtonElement.append('cancel');
  cancelButtonElement.addEventListener('click', () => {
    closeDialogWindow()
  })

  dialogElement.append(titleElement);
  dialogElement.append(inputElement);
  dialogElement.append(saveButtonElement);
  dialogElement.append(cancelButtonElement);
  return dialogElement;
}