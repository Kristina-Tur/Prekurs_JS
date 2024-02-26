//import { createNewTask } from "../../../data/data.js";
import { openAddDialogWindow } from "../../../data/data.js";

export function Button() {
  const buttonElement = document.createElement('button');
  buttonElement.append('+ add');

  buttonElement.addEventListener('click', openAddDialogWindow);

  return buttonElement;
}