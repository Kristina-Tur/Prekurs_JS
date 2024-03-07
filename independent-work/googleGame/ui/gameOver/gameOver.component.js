import {getScores, getSettings} from "../../data/data.js";
import {Win} from "./win/Win.component.js";
import {Lose} from "./Lose/Lose.component.js";

export function GameOver() {
    const container = document.createElement('div');
    if (getScores().catchesCount === getSettings().pointsWin) {
        container.append(Win());
    }else if (getScores().missesCount >= getSettings().maximumMisses+1){
        container.append(Lose());
    }
    return container;
}