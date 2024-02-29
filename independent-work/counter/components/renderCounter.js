import { Header } from "./Header/Header.component.js";
import { Counter } from "./Counter/Counter.component.js";
import { Button } from "./Button/Button.component.js";

export function renderCounter(data) {
  const containerElement = document.getElementById('container');
  const header = Header(data.title);
  const counter = Counter(data.counter);
  const button = Button();

  containerElement.append(header);
  containerElement.append(counter);
  containerElement.append(button);
  return containerElement;
}
