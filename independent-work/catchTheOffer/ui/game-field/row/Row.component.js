import {data} from "../../../data/data.js";
import {Cell} from "../cell/Cell.component.js";
export function Row(y) {
    const rowElement = document.createElement('tr');

    for (let x = 0; x < data.settings.grid.columns; x++) {
        const columnElement = Cell(x, y);
        rowElement.append(columnElement);
    }
    return rowElement;
}

