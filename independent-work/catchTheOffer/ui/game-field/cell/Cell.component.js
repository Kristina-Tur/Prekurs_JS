import {CatchOffer, MissedOffer, RenderOffer} from "./renderOffer/RenderOffer.component.js";
import {data} from "../../../data/data.js";

export function Cell(x, y) {
    const columnElement = document.createElement('td');
    if (x === data.coords.x && y === data.coords.y) {
        columnElement.append(RenderOffer());
    }
    if (x === data.missedOffer?.x && y === data.missedOffer?.y) {
        columnElement.append(MissedOffer());
    }
    if (x === data.catchOffer?.x && y === data.catchOffer?.y) {
        columnElement.append(CatchOffer());
    }

    return columnElement;
}