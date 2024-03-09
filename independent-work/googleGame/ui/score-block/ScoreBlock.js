import {getScores} from "../../data/data.js";
export function ScoreBlock() {
    const container = document.createElement('div');
    container.append(`Player1: ${getScores().players1.points} Player2: ${getScores().players2.points}`);
    return container;
}