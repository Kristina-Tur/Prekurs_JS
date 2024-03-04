import {Game} from "./ui/game/game.component.js";
import {data, subscribe} from "./data.js";
import {Win} from "./ui/game/win/win.component.js";

const appElement = document.querySelector('#app');

function renderGame() {
    appElement.innerHTML = '';
    if (data.win) {
        const win = Win();
        appElement.append(win);
    } else {
        const game = Game();
        appElement.append(game);
    }
}

renderGame()

subscribe(renderGame);




