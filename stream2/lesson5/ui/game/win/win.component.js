import { data, restart } from "../../../data.js";

export function Win() {
  const element = document.createElement('div');
  element.append(`You win! Score: ${data.scorePoints} .Miss: ${data.missPoints}`)

  const button = ButtonRestart();
  element.append(button);

  return element
}

function ButtonRestart() {
  const button = document.createElement('button');
  button.innerHTML = 'RESTART';
  button.addEventListener('click', () => {
    restart()
  })
  return button;
}