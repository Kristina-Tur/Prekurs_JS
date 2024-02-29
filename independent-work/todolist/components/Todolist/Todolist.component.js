import { data } from "../../data/data.js";
import { DeleteButton } from "./deleteButton/DeleteButton.component.js";

export function Todolist() {
  const todolistElement = document.createElement('ol');

  for (let i = 0; i < data.tasks.length; i++) {
    const element = data.tasks[i];
    const itemElement = document.createElement('li');
    itemElement.append(element.title);
    itemElement.addEventListener('dblclick', () => {
      itemElement.contentEditable = "true"; // Разрешаем редактирование
      itemElement.focus();// Передаем фокус на элемент для редактирования
    })
    todolistElement.append(itemElement);

    const deleteButton = DeleteButton(element.id);
    itemElement.append(deleteButton);
  }

  return todolistElement;
}