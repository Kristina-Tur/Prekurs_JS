import { ButtonPanel } from "./ButtonPanel/ButtonPanel.js";
import { Header } from "./Header/Header.js";
import { Tasks } from "./Tasks/Tasks.js";
import { AddNewTaskDialog } from "./AddNewTaskDialog/AddNewTaskDialog.component.js";

export function Todolist(listData) {
  const container = document.createElement("div");

  const headerElement = Header(listData.title);
  const tasksListElement = Tasks(listData.tasks);
  const buttonElement = ButtonPanel();
  const dialog = AddNewTaskDialog();

  container.append(headerElement);
  container.append(tasksListElement);
  container.append(buttonElement);
  container.append(dialog);

  return container;
}

