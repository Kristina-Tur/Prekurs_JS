import { data } from "./data/data.js";
import { Todolist } from "./components/todolist/Todolist.component.js";
import { subscribe } from "./data/data.js";

subscribe(refreshUI);

function refreshUI() {
  const todolisElement = Todolist(data.todolist);
  const rootElement = document.getElementById('root');

  rootElement.innerHTML = ''
  rootElement.append(todolisElement);
}

//чтобы первая отрисовка произошла, вызвать 
refreshUI()
