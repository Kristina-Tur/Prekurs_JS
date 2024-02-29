import { decrementCounterOnButton, incrementCounterOnButton } from "../../data/data.js";

export function Button() {
  const containerElement = document.createElement('div');
  const buttonIncElement = document.createElement('button');
  buttonIncElement.append('+');
  buttonIncElement.addEventListener('click', () => {
    incrementCounterOnButton()
  })
  const buttonDecElement = document.createElement('button');
  buttonDecElement.append('-');
  buttonDecElement.addEventListener('click', () => {
    decrementCounterOnButton()
  })

  containerElement.append(buttonIncElement);
  containerElement.append(buttonDecElement);
  return containerElement;
}