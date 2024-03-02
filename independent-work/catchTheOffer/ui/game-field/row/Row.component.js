import {data} from "../../../data/data";
import {Column} from "../column/Column.component.js";
export function Row() {
    const rowElement = document.createElement('tr');

    for (let x = 0; x < data.settings.grid.rows; x++) {
        const columnElement = Column();
        rowElement.append(columnElement);
    }
    return rowElement;
}

