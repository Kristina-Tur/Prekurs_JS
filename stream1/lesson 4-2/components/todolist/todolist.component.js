import { openAddNewTaskDialog } from "../../data/data.js";
import { AddNewTaskDialog } from "./AddNewTaskDialog/AddNewTaskDialog.js";
import { Button } from "./Button/Button.js";
import { Header } from "./Header/Header.js";
import { TasksList } from "./Tasks/TasksList.js";


export function Todolist(todolistData) {
  const container = document.createElement('div');
  
  const headerElement = Header(todolistData.todolist.title);
  const tasksListElement = TasksList(todolistData.todolist.tasks);
  const buttonElement = Button('add', ()=> openAddNewTaskDialog());
  const dialogElement = AddNewTaskDialog();

  container.append(headerElement);
  container.append(tasksListElement);
  container.append(buttonElement);
  container.append(dialogElement);

  return container
}


