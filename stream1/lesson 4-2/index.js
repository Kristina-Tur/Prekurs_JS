import { data, subscribe } from "./data/data.js";
import { Todolist } from "./components/todolist/todolist.component.js";

function updateUI() {
  const rootElement = document.getElementById("root");
  const todolistElement = Todolist(data);

  rootElement.innerHTML = "";

  rootElement.append(todolistElement);
}

updateUI()
subscribe(updateUI)
