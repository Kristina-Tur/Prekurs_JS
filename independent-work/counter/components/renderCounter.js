import { Header } from "./Header/Header.component.js";
import { Counter } from "./Counter/Counter.component.js";
import { Button } from "./Button/Button.component.js";

export function renderCounter() {
  const containerElement = document.getElementById('container');
  const header = Header();
  const counter = Counter();
  const button = Button();

  containerElement.innerHTML = '';

  containerElement.append(header);
  containerElement.append(counter);
  containerElement.append(button);

  return containerElement;
}