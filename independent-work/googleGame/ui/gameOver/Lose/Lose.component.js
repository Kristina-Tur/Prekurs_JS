import {restart} from "../../../data/data.js";

export function Lose() {
    const element = document.createElement('h2');
    element.append('You Lose!');
    const buttonElement = document.createElement('button');
    buttonElement.append('Play again');
    buttonElement.addEventListener('click', () => {
        restart();
    })
    element.append(buttonElement);
    return element
}