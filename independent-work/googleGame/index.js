import {Game} from "./ui/game.component.js";
import {
    subscribe,
    GAME_STATUSES,
    movePlayer1Up,
    movePlayer1Down,
    movePlayer1Left,
    movePlayer1Right, getGameStatus, movePlayer2Up, movePlayer2Down, movePlayer2Left, movePlayer2Right
} from "./data/data.js";
import {GameOver} from "./ui/gameOver/gameOver.component.js";
import {SettingsPanel} from "./ui/settings-panel/SettingsPanel.js";


export function renderUI() {
    const container = document.getElementById('container');
    container.innerHTML = '';

    switch (getGameStatus()) {
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
    }
}

renderUI();
subscribe(renderUI);

window.addEventListener('keyup', (e) => {
    debugger
    switch (e.code) {
        case 'ArrowUp':
            movePlayer1Up();
            break;
        case 'ArrowDown':
            movePlayer1Down();
            break;
        case 'ArrowLeft':
            movePlayer1Left();
            break;
        case 'ArrowRight':
            movePlayer1Right();
            break;
        case 'keyW':
            movePlayer2Up();
            break;
        case 'keyS':
            movePlayer2Down();
            break;
        case 'keyA':
            movePlayer2Left();
            break;
        case 'keyD':
            movePlayer2Right();
            break;
    }
})
