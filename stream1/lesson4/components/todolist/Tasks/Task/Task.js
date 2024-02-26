import { deleteButton } from "./DeleteButton/deleteButton.js";

export function Task(task) {
  const itemElement = document.createElement("li");
  itemElement.append(task.title);

  const deleteButtonElement = deleteButton(task.id)

  itemElement.append(deleteButtonElement)

  return itemElement;
}


