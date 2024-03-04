import {Game} from "./ui/game.component.js";
import {subscribe, GAME_STATUSES, data} from "./data/data.js";
import {GameOver} from "./ui/gameOver/gameOver.component.js";


export function renderUI() {
    const container = document.getElementById('container');
    container.innerHTML = '';

    switch (data.gameStatus) {
        case GAME_STATUSES.SETTINGS :
            const settings = Settings();
            container.append(settings);
        case GAME_STATUSES.IN_PROGRESS :
            const game = Game();
            container.append(game);
            break;
        case GAME_STATUSES.FINISH:
            const gameOver = GameOver();
            container.append(gameOver);
    }
}

renderUI();
subscribe(renderUI);