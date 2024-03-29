import {data} from "../../data/data.js";
import {Win} from "./win/Win.component.js";
import {Lose} from "./Lose/Lose.component.js";

export function GameOver() {
    const container = document.createElement('div');
    if (data.scores.catchesCount === data.settings.pointsWin) {
        container.append(Win());
    }
    if (data.scores.missesCount >= data.settings.maximumMisses){
        container.append(Lose());
    }
    return container;
}