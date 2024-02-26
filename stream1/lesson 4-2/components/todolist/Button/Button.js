import { addTask } from "../../../data/data.js";


export function Button(par, fun) {
  const container = document.createElement('button');
  container.append('+ add');
  container.addEventListener('click', () => {
    addTask();
  });

  return container;
}
