import {data} from "../../data/data.js";
import {Row} from "./row/Row.component.js";
import {RenderGoogle} from "./cell/renderOffer/RenderOffer.component.js";

export function GameField() {
    const container = document.createElement('table');

    for (let y = 0; y < data.settings.gridSize.rows; y++) {
        const rowElement = Row(y);
        container.append(rowElement)
    }

    return container;
}