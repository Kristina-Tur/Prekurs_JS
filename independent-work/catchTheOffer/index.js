import {Game} from "./ui/game.component.js";
import {subscribe} from "./data/data.js";

export function renderUI(){
    const container = document.getElementById('container');

    const gameElement = Game();
    container.innerHTML = '';
    container.append(gameElement)

    return container;
}

renderUI();
subscribe(renderUI);