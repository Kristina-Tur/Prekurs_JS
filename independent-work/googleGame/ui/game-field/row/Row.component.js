import {data} from "../../../data/data.js";
import {Cell} from "../cell/Cell.component.js";
export function Row(y) {
    const rowElement = document.createElement('tr');

    for (let x = 0; x < data.settings.gridSize.columns; x++) {
        const cellElement = Cell(x, y);
        rowElement.append(cellElement);
    }
    return rowElement;
}

