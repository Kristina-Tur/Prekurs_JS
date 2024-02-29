import { addItem } from "../../data/data.js";

export function Button() {
  const buttonElement = document.createElement('button');
  buttonElement.append('+');
  buttonElement.addEventListener('click', () => {
    addItem()
  })

  return buttonElement;
}