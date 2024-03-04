import {data} from "../../data/data.js";
import {Win} from "../gameOver/Win/Win.component.js";
export function ScoreBlock() {
    const container = document.createElement('div');
    container.append(`Catch: ${data.scores.catchesCount} Miss: ${data.scores.missesCount}`);

    if(data.scores.missesCount === 1){
        Win()
    }
    return container;
}