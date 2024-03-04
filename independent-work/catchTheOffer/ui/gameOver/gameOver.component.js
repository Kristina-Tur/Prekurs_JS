import {data} from "../../data/data.js";
import {Win} from "./win/Win.component.js";
import {Lose} from "./Lose/Lose.component.js";

export function GameOver() {
    const container = document.createElement('div');
    if (data.scores.catchesCount === data.catchesCountWin) {
        container.append(Win());
    }else if (data.scores.missesCount > 3){
        container.append(Lose());
    }
    return container;
}