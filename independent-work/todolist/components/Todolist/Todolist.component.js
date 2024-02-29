import { data } from "../../data/data.js";
import { DeleteButton } from "./deleteButton/DeleteButton.component.js";

export function Todolist() {
  const todolistElement = document.createElement('ol');

  for (let i = 0; i < data.length; i++) {
    const element = data[i];
    const itemElement = document.createElement('li');
    itemElement.append(element.title);
    todolistElement.append(itemElement);

    const deleteButton = DeleteButton(element.id);
    itemElement.append(deleteButton);
  }

  return todolistElement;
}