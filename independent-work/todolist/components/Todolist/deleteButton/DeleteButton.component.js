import { deleteItem } from "../../../data/data.js";

export function DeleteButton(itemId) {
  const buttonElement = document.createElement('button');
  buttonElement.append('❌');
  buttonElement.addEventListener('click', () => {
    deleteItem(itemId)
  });
  return buttonElement;
}