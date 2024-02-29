import { subscribe } from "./data/data.js";
import { renderTodolist } from "./components/renderTodolist.component.js";

refreshUI();
subscribe(renderTodolist);

function refreshUI() {
  const containerElement = document.getElementById('container');
  renderTodolist();
  
  return containerElement;
}