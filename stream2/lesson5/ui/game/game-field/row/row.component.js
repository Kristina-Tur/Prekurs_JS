import { data } from "../../../../data.js";
import { Cell } from "../cell/cell.component.js";

export function Row(y) {
  const rowElement = document.createElement('tr');
  for (let x = 0; x < data.columnCount; x++) {
    const cellElement = Cell(x, y);
    rowElement.append(cellElement);
  }
  return rowElement;
}
