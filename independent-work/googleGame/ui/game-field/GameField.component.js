import {getSettings} from "../../data/data.js";
import {Row} from "./row/Row.component.js";

export function GameField() {
    const container = document.createElement('table');

    for (let y = 0; y < getSettings().rows; y++) {
        const rowElement = Row(y);
        container.append(rowElement)
    }

    return container;
}