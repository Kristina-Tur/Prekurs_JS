import {Game} from "./ui/game.component.js";
import {subscribe, GAME_STATUSES, data} from "./data/data.js";
import {GameOver} from "./ui/gameOver/gameOver.component.js";


export function renderUI() {
    const container = document.getElementById('container');
    container.innerHTML = '';

    switch (data.gameStatus) {
        case GAME_STATUSES.IN_PROGRESS :
            const gameElement = Game();
            container.append(gameElement);
            break;
        case GAME_STATUSES.FINISH:
            const gameOverElement = GameOver();
            container.append(gameOverElement);
    }
}

renderUI();
subscribe(renderUI);