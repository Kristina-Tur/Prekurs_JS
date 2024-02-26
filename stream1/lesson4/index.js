import { data, subscribe } from "./data/data.js";
import {Todolist} from "./components/todolist/tododlist.component.js";

//когда мы хотим нажать на кнопку, подписаться, то обновить данные
subscribe(refreshUI);

function refreshUI() {
  //console.log(data)
const todolistElement = Todolist(data.todolist);
const rootElement = document.getElementById("root");

rootElement.innerHTML = "";

rootElement.append(todolistElement)
}

//чтобы первая отрисовка произошла, вызвать 
refreshUI()

//Первая точка входа index.js здесь вызываем функцию subscribe(refreshUI). В параметре которой сидит функция по отрисовке. В data.js функция refreshUI будет уже называться subscriber, которая будет присваиваться функции notifySubscriber, теперь она будет называться notifySubscriber и поэтому notifySubscriber может вызываться в функции createTask.
//По факту, вызывая функцию notifySubscriber() в data.js, мы вызываем функцию refreshUI() в index.js, потому что она была передеана как колбэк в вышестоящий модуль

