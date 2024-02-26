import { data } from "../../../data.js";
import { Row } from "./row/row.component.js";

export function GameField() {
  const container = document.createElement('table');

  for (let y = 0; y < data.rowsCount; y++) {
    const rowElement = Row(y)
    container.append(rowElement);
  }
  return container
}

