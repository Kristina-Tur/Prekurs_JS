import { Header } from "./Header/Header.component.js";
import { Todolist } from "./Todolist/Todolist.component.js";
import { Button } from "./Button/Button.component.js";

export function renderTodolist() {
  const containerElement = document.getElementById('container');
  const header = Header();
  const todolist = Todolist();
  const button = Button();

  containerElement.append(header);
  containerElement.append(todolist);
  containerElement.append(button);

  return containerElement;
}
