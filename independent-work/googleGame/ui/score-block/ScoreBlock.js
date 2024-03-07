import {getScores} from "../../data/data.js";
export function ScoreBlock() {
    const container = document.createElement('div');
    container.append(`Catch: ${getScores().catchesCount} Miss: ${getScores().missesCount}`);
    return container;
}