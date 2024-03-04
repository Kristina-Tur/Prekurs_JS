import {data, Restart} from "../../data/data.js";

export function GameOver() {

    const element = document.createElement('h2');
    const buttonElement = document.createElement('button');
    buttonElement.append('Restart');
    buttonElement.addEventListener('click', () => {
     Restart();
    })
    if (data.scores.catchesCount === data.catchesCountWin) {
        element.append('You Win!');
        element.append(buttonElement);
    }else if (data.scores.missesCount > 3){
        element.append('You Lose!');
    }
    return element
}