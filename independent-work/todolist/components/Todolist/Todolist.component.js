import { data } from "../../data/data.js";

export function Todolist() {
  const todolistElement = document.createElement('ol');
  
  for (let i = 0; i < data.length; i++) {
    const element = data[i];
    const itemElement = document.createElement('li');
    itemElement.append(element.title);
    todolistElement.append(itemElement);
  }
  
  return todolistElement;
}