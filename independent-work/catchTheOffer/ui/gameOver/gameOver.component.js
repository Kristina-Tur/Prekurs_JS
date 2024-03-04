import {data} from "../../data/data.js";
import {Win} from "./Win/Win.component.js";

export function gameOver(){
    if(data.scores.catchesCount === 3){
        Win()
    }
}