import {Game} from "./ui/game.component.js";

export function renderUI(){
    const container = document.getElementById('container');

    const gameElement = Game();
    container.append(gameElement)

    return container;
}

renderUI()