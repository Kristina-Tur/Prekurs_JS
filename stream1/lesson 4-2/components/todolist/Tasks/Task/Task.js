import { deleteTask } from "../../../../../lesson4/data/data.js";
import { Button } from "../../Button/Button.js";

export function Task(task) {
  const container = document.createElement('li');
  container.append(task.title);
  const deleteBtn = Button('x', () => {
    deleteTask(task.id)
  });

  container.append(deleteBtn);
  return container;
}
