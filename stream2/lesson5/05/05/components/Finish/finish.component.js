import { data } from "../../data/data.js";


export function Finish() {
    const element = document.createElement('div');

    if (data.scores.catchesCount === data.settings.pointsToWin) {
        element.append('WIN')
    } else {
        element.append('LOSE')
    }


    return element; 
}