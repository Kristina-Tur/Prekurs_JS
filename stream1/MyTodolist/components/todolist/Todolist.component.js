import { Header } from "./header/Header.js";
import { Tasks } from "./tasks/Tasks.js";
import { Button } from "./button/Button.js";
import { AddDialogWindow } from "../AddDialogWindow/AddDialogWindow.component.js";

export function Todolist(taskData) {
  const containerElement = document.createElement('div');

  const header = Header(taskData.title);
  const todolist = Tasks(taskData.tasks);
  const button = Button();
  const dialog = AddDialogWindow();

  containerElement.append(header);
  containerElement.append(todolist);
  containerElement.append(button);
  containerElement.append(dialog);

  return containerElement
}