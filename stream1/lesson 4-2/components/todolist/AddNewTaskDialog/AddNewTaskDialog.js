import { Button } from "../Button/Button.js";
import { addTask, closeAddNewTaskDialog, data } from "../../../data/data.js";

export function AddNewTaskDialog() {
  const container = document.createElement('dialog');
  container.open = data.todolist.addNewTaskDialog.isOpen;

  const titleElement = document.createElement('h3');
  titleElement.append('Enter new task title');

  const inputElement = document.createElement('input');

  function SaveNewTaskHeadler() {
    addTask(inputElement.value)
    closeAddNewTaskDialog()
  }

  const saveButton = Button('save', SaveNewTaskHeadler);
  const cancelButton = Button('cancel', () => closeAddNewTaskDialog());

  container.append(titleElement);
  container.append(inputElement);
  container.append(saveButton);
  container.append(cancelButton);


  return container;
}