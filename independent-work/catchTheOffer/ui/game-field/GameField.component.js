import {data} from "../../data/data.js";
import {Row} from "./row/Row.component.js";

export function GameField() {
    const container = document.createElement('table');

    for (let y = 0; y < data.settings.grid.rows; y++) {
        const rowElement = Row();
        container.append(rowElement)
    }
    return container;
}