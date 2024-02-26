import { deleteButton } from "./deleteButton/deleteButton.js";

export function Task(task) {
  const listItemElement = document.createElement('li');
  listItemElement.append(task.title);

  const deleteButtonElement = deleteButton(task.id)
  listItemElement.append(deleteButtonElement);

  return listItemElement;
}
