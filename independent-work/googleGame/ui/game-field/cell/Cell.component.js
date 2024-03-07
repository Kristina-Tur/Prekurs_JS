import {Player1, Player2, RenderGoogle} from "./renderOffer/RenderOffer.component.js";
import {data} from "../../../data/data.js";

export function Cell(x, y) {
    const cellElement = document.createElement('td');
    if (x === data.coords.x && y === data.coords.y) {
        cellElement.append(RenderGoogle());
    }
    if (x === data.players[0].x && y === data.players[0].y) {
        cellElement.append(Player1());
    }
    if (x === data.players[1].x && y === data.players[1].y) {
        cellElement.append(Player2());
    }
    return cellElement;
}