import {Game} from "./ui/game.component.js";
import {subscribe, GAME_STATUSES, data} from "./data/data.js";
import {GameOver} from "./ui/gameOver/gameOver.component.js";
import {SettingsPanel} from "./ui/settings-panel/SettingsPanel.js";


export function renderUI() {
    const container = document.getElementById('container');
    container.innerHTML = '';

    switch (data.gameStatus) {
        case GAME_STATUSES.SETTINGS :
            const settings = SettingsPanel();
            container.append(settings);
            break;
        case GAME_STATUSES.IN_PROGRESS :
            const game = Game();
            container.append(game);
            break;
        case GAME_STATUSES.FINISH:
            const gameOver = GameOver();
            container.append(gameOver);
            break;
    }
}

renderUI();
subscribe(renderUI);