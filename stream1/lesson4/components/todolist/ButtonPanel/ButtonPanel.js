import { openAddTaskDialog } from "../../../data/data.js";

export function ButtonPanel() {
  const buttonElement = document.createElement("button");
  buttonElement.append("+ add");

  buttonElement.addEventListener('click', openAddTaskDialog)

  return buttonElement;
}


