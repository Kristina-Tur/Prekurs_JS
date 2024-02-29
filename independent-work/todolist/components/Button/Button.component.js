import { openDialogWindow } from "../../data/data.js";

export function Button() {
  const buttonElement = document.createElement('button');
  buttonElement.append('+');
  buttonElement.addEventListener('click', () => {
    openDialogWindow()
  })

  return buttonElement;
}