import {RenderOffer} from "./renderOffer/RenderOffer.component.js";
import {data} from "../../../data/data.js";

export function Cell(x, y) {
    const columnElement = document.createElement('td');
    if (x === data.coords.x && y === data.coords.y) {
        columnElement.append(RenderOffer());
    }
    return columnElement;
}