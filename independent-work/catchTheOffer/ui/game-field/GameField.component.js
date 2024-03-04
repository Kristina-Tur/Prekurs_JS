import {data} from "../../data/data.js";
import {Row} from "./row/Row.component.js";
import {RenderOffer} from "./cell/renderOffer/RenderOffer.component.js";

export function GameField() {
    const container = document.createElement('table');

    /*let rowIndex = data.coords.y;
    let cellIndex = data.coords.x;*/

    for (let y = 0; y < data.settings.grid.rows; y++) {
        const rowElement = Row(y);
        container.append(rowElement)
    }

    return container;
}