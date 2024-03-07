import {Player1, Player2, RenderGoogle} from "./renderOffer/RenderOffer.component.js";
import {getGooglePosition, getPlayer1Position, getPlayer2Position} from "../../../data/data.js";

export function Cell(x, y) {
    const cellElement = document.createElement('td');
    if (x === getGooglePosition().x && y === getGooglePosition().y) {
        cellElement.append(RenderGoogle());
    }
    if (x === getPlayer1Position().x && y === getPlayer1Position().y) {
        cellElement.append(Player1());
    }
    if (x === getPlayer2Position().x && y === getPlayer2Position().y) {
        cellElement.append(Player2());
    }
    return cellElement;
}